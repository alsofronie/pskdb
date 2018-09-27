var memoryPDS = require("./InMemoryPDS");
var fs = require("fs");
var path = require("path");

function FolderPersistentPDS(folder) {
    this.memCache = memoryPDS.newPDS(this);

    function mkSignleLine(str) {
        return str.replace(/\n|\r/g, "");
    }

    function makeCurrentValueFilename(){
        return path.normalize(folder + '/currentVersion');
    }


    this.persist = function (transactionLog, internalValues, currentPulse) {

        transactionLog.currentPulse = currentPulse;

        var transactionLog = mkSignleLine(JSON.stringify(transactionLog)) + "\n";
        fs.mkdir(folder, function (err, res) {
            if (err.code != "EEXIST") throw err;
        });
        fs.appendFileSync(folder + '/transactionsLog', transactionLog, 'utf8');
        fs.writeFileSync(makeCurrentValueFilename(), JSON.stringify(internalValues, null, 1));
    }

    var innerValues = JSON.parse(fs.readFileSync(makeCurrentValueFilename()));
    console.log(innerValues);
    this.memCache.initialise(innerValues);
}

exports.newPDS = function (folder) {
    var pds = new FolderPersistentPDS(folder);
    return pds.memCache;
}
