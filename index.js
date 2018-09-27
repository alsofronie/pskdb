


module.exports = {
    startDB:function(folder){
        var fpds = require("./lib/FolderPersistentPDS");
        return fpds.newPDS(folder);
    },
    parseDomainUrl:function(domainUrl){

    },
    getDomainInfo:function(){

    }
}