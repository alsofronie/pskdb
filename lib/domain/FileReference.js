$$.contract.describe("FileReference", {
	public:{
		alias:"string",
		path :"string",
		seed :"string",
	},
	init:function(alias, path, seed){
		this.alias = alias;
		this.path  = path;
		this.seed  = seed;
	},
	isEmpty: function() {
		return typeof this.alias === 'undefined' && typeof this.path === 'undefined' && typeof this.seed === 'undefined'
	}
});