var Counter = function(start, increment){
	this.start = start;
	this.increment = increment;
	this.increase = function(){
		var new_qty = this.start+this.increment;
		document.getElementById('qty').value = new_qty;
		this.start = new_qty;
	};
	document.getElementById('qty').value = this.start;
};
