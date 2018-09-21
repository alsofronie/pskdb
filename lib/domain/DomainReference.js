
$$.contract.describe("DomainReference", {
    public:{
        role:"string:index",
        alias:"string:key",
        adresses:"map"
    },
    init:function(role, alias){
        this.role = role;
        this.alias = alias;
    },
    updateDomainAddress:function(replicationAgent, adress){
        this.adresses[replicationAgent] = adress;
    }
});