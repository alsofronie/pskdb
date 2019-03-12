
$$.asset.describe("Backup", {
    public:{
        alias:"string:key",
        utl: "string"
    },

    init:function(id, url){
        this.id = id;
        this.url = url;
    }
});
