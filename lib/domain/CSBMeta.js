
$$.asset.describe("CSBMeta", {
	public:{
		isMaster:"string",
		alias:"string:key",
		description: "string",
		creationDate: "string",
		updatedDate : "string",
		id: "string",
		icon: "string"
	},
	init:function(id, isMaster){
		this.alias = "meta";
		this.id = id;
		this.isMaster = isMaster;
	}

});
