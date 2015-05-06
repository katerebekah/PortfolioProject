function newEntry () {
	this.price = ko.observable();
	this.description = ko.observable();
};

function format(val) {
	return "$" + val.toFixed(2);
};

function viewModel () {
	this.entries = ko.observableArray([]);
	
	this.addEntry = function(){	
		this.entries.push(new newEntry());
		console.log(this.entries());
	};

	this.removeEntry = function(entry) { 
		console.log(this);
		this.entries.remove(entry); 
	};

	
	this.totalPrice = ko.computed(function () {
		var total = 0;
		for (var i = 0; i < this.entries().length; i++) {
			if (!isNaN(this.entries()[i].price())) {
			total += parseFloat(this.entries()[i].price());
			}
		}
		console.log(total);
		return format(total);
	}, this); 
};

ko.applyBindings(new viewModel());