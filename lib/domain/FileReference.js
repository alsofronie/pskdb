$$.asset.describe("FileReference", {
	public:{
		alias:"string",
		path :"string",
		seed :"string",
	},
	init:function(alias, path, seed){
		this.alias = alias;
		this.path  = path;
		this.seed  = seed;
	}
});