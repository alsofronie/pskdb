const memoryPDS = require("./InMemoryPDS");

function PersistentPDS({getInitValues, persist}) {
	this.memCache = memoryPDS.newPDS(this);
	this.persist = persist;

	const innerValues = getInitValues() || new EmptyVersion();
	this.memCache.initialise(innerValues);
}

function EmptyVersion() {
	return {
		cset: {},
		writeSetVersions: {},
		previousVSD: "",
		vsd: "",
		currentPulse: undefined
	};
}

module.exports.newPDS = function (readerWriter) {
	const pds = new PersistentPDS(readerWriter);
	return pds.memCache;
};
