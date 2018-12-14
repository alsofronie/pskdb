
$$.asset.describe("CSBReference", {
    public:{
        alias:"string:key",
        dseed:"string",
        backups:"set",
        version:"int",
    },
    init:function(alias, dseed){
        this.alias = alias;
        this.dseed = dseed;
    },
    update:function(fingerprint){
        this.fingerprint = fingerprint;
        this.version++;
    },
    registerBackupUrl:function(backupUrl){
        this.backups.add(backupUrl);
    }
});