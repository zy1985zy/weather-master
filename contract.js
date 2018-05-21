"use strict";

var WeaTher = function() {
    LocalContractStorage.defineMapProperty(this, "dataMap");
//	LocalContractStorage.defineMapProperty(this, "likeMap");
	LocalContractStorage.defineProperty(this, "size");
};

WeaTher.prototype = {
    init: function() {
		this.size = 0;
	},
	save: function(parameter) { //存储天气情况的那个城市
		parameter = parameter.trim();
	    if (parameter === "") {
            throw new Error("empty city");
        }
		var key = this.size;
        var obj = new Object();
		obj.index = key;
        obj.parameter = parameter;
        obj.author = Blockchain.transaction.from;
		obj.createdDate = Blockchain.transaction.timestamp;
		
        this.dataMap.set(key, JSON.stringify(obj));
		
		this.size += 1;
    }
};
module.exports = WeaTher;