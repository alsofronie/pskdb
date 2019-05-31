$$.asset.describe("FileReference", {
	public:{
		alias:"string",
		seed :"string",
		dseed:"string",
		digest: "string"

	},
	init:function(alias, seed, dseed, digest){
		this.alias = alias;
		this.seed  = seed;
		this.dseed = dseed;
		this.digest = digest;
	},

	setDigest: function (digest) {
		this.digest = digest;
	}
});