
$$.asset.describe("CSBReference", {
    public:{
        alias:"string:key",
        seed :"string",
        dseed:"string",
        backups:"set",
        version:"int",
    },
    init:function(alias, seed, dseed){
        this.alias = alias;
        this.seed  = seed;
        this.dseed = dseed;
    },
    update:function(fingerprint){
        this.fingerprint = fingerprint;
        this.version++;
    },
    registerBackupUrl:function(backupUrl){
        this.backups.add(backupUrl);
    },
    isEmpty: function () {
        return typeof this.alias === 'undefined' && typeof this.seed === 'undefined' && typeof this.dseed === 'undefined';
    }
});
