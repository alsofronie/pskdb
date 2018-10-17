const consUtil = require('signsensus').consUtil;
const beesHealer = require('foldermq').beesHealer;

function Blockchain(pds) {
    let swarm = null;

    this.beginTransaction = function (transactionSwarm) {
        if (!transactionSwarm) {
            throw new Error('Missing swarm');
        }

        swarm = transactionSwarm;
        return new Transaction(pds.getHandler());
    };

    this.commit = function (transaction) {

        const diff = pds.computeSwarmTransactionDiff(swarm, transaction.getHandler());
        const t = consUtil.createTransaction(0, diff);
        const set = {};
        set[t.digest] = t;
        pds.commit(set, 1);
    };
}


function Transaction(pdsHandler) {
    this.add = function (swarm) {
        const swarmTypeName = swarm.getMeta('swarmTypeName');
        const swarmId = swarm.getMeta('swarmId');
        if (swarm.alias) {

            pdsHandler.writeKey(swarmTypeName + '/aliases/' + swarm.alias, swarmId);
        }

        const serializedSwarm = beesHealer.asJSON(swarm, null, null);

        pdsHandler.writeKey(swarmTypeName + '/' + swarmId, J(serializedSwarm));
    };

    this.lookup = function (spaceName, aid) { // alias sau id
        const localUid = getLocalUid(spaceName, aid);
        const value = pdsHandler.readKey(localUid);

        if (!value) {

            return $$.contract.start(spaceName);
        } else {

            return $$.contract.restart(spaceName, JSON.parse(value))
        }
    };

    this.getHandler = function () {
        return pdsHandler;
    };

    function getLocalUid(spaceName, aid) {
        const uid = pdsHandler.readKey(spaceName + '/aliases/' + aid);
        if (uid) {
            return spaceName + '/' + uid;
        } else {
            return spaceName + '/' + aid;
        }
    }
}

module.exports = Blockchain;