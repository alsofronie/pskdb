
$$.contract.describe('remote', {
    public:{
        alias: 'string',
        remotes: 'object' // {alias: 'endpoint'}
    },
    init: function(alias) {
        this.alias = alias;
    },
    addRemote: function(alias, endpoint) {
        if(!this.remotes) {
            this.remotes = {};
        }

        this.remotes[alias] = endpoint
    }
});