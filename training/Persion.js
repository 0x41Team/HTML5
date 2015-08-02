(function(window){
	function Persion(name, address) {
		this.name = name;
		this.address = address;

		Persion.prototype.sayHello = function() {
			console.log(this.name + ' say Hello');
		}
	}
	window.Persion = Persion;
}(window))