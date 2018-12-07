$$.contract.describe("FileReference", {
	public:{
		alias:"string",
		path :"string"
	},
	init:function(alias, path){
		this.alias = alias;
		this.path = path;
	},
	isEmpty: function() {
		return typeof this.alias === 'undefined' && typeof this.path === 'undefined';
	}
});