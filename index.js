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

    },
    startInMemoryDB: function() {
		require('./lib/domain');
		require('./lib/swarms');

		const pds = require('./lib/InMemoryPDS');

		return new Blockchain(pds.newPDS(null));
    },
    startCsbDb: function(readerWriter) {
        require('./lib/domain');
        require('./lib/swarms');

        const csbPds = require("./lib/CsbPersistentPDS");
        const pds = csbPds.newPDS(readerWriter);

        return new Blockchain(pds);
    }
};
