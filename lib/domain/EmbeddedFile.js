$$.asset.describe("EmbeddedFile", {
	public:{
		alias:"string",
		data :"string"
	},
	init:function(alias, data){
		this.alias = alias;
		this.data  = data;
	},
	isEmpty: function() {
		return typeof this.alias === 'undefined' && typeof this.data === 'undefined';
	}
});