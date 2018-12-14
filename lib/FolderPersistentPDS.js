var memoryPDS = require("./InMemoryPDS");
var fs = require("fs");
var path = require("path");


function FolderPersistentPDS(folder) {
    this.memCache = memoryPDS.newPDS(this);

    function mkSingleLine(str) {
        return str.replace(/\n|\r/g, "");
    }

    function makeCurrentValueFilename(){
        return path.normalize(folder + '/currentVersion');
    }

    function getCurrentValue(path) {
        try {
            return JSON.parse(fs.readFileSync(path).toString());
        } catch (e) {
            return null;
        }
    }

    this.persist = function (transactionLog, internalValues, currentPulse) {

        transactionLog.currentPulse = currentPulse;

        var transactionLog = mkSingleLine(JSON.stringify(transactionLog)) + "\n";
        fs.mkdir(folder, function (err, res) {
            if (err && err.code != "EEXIST") throw err;
            
            fs.appendFileSync(folder + '/transactionsLog', transactionLog, 'utf8');
            fs.writeFileSync(makeCurrentValueFilename(), JSON.stringify(currentValues, null, 1));
        });
    }

    var innerValues = getCurrentValue(makeCurrentValueFilename());
    this.memCache.initialise(innerValues);
}

exports.newPDS = function (folder) {
    var pds = new FolderPersistentPDS(folder);
    return pds.memCache;
}
