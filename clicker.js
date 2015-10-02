var Counter = function(start){
	this.start = start;
	this.increase = function(){
		var new_qty = start++;
		document.getElementById('qty').value = new_qty;
		return new_qty;
	};
};
