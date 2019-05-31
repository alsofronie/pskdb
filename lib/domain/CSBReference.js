
$$.asset.describe("CSBReference", {
    public:{
        alias:"string:key",
        seed :"string",
        dseed:"string",
        encSeed: "array",
        headerHistoryHash:"string"
    },
    init:function(alias, seed, dseed, headerHistoryHash){
        this.alias = alias;
        this.seed  = seed;
        this.dseed = dseed;
        this.headerHistoryHash = headerHistoryHash;
    },
    updateHeadersHistoryHash: function (headerHistoryHash) {
        this.headerHistoryHash = headerHistoryHash;
    }
});


$$.asset.describe("CSBAnchor", {
    public:{
        alias:"string:key",
        uid  :"string",
        headerHistoryHash: "string"
    },
    init:function(alias, uid, headerHistoryHash){
        this.alias = alias;
        this.uid  = uid;
        this.headerHistoryHash = headerHistoryHash;
    },
    updateHeaderHistoryHash: function (headerHistoryHash) {
        this.headerHistoryHash = headerHistoryHash;
    }
});
