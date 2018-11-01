
$$.contract.describe('remote', {
    public:{
        alias: 'string',
        endpoint: 'string'
    },
    init: function(alias, endpoint) {
        this.alias = alias;
        this.endpoint = endpoint;
    },
    getRawData: function() {
        return {
            alias:    this.alias,
            endpoint: this.endpoint
        };
    }
});