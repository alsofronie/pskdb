const Blockchain = require('./lib/Blockchain');

module.exports = {
    startDB: function (folder) {
        if ($$.blockchain) {
            throw new Error('$$.blockchain is already defined');
        }

        require('./lib/domain');
        require('./lib/swarms');

        const fpds = require("./lib/FolderPersistentPDS");
        const pds = fpds.newPDS(folder);

        $$.blockchain = new Blockchain(pds);

        return pds;
    },
    parseDomainUrl: function (domainUrl) {

    },
    getDomainInfo: function () {

    }
};
