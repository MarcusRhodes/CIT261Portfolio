const ships = [{
	name: "Dreanought",
	model: "Star",
	make: "Vader"
}, {
	name: "Death Star",
	model: "Destroyer",
	make: "Palpatine"
}];

const num = [1,22,3,4,35,6,73,8,19];

function myfunc() {
	for (let ship of ships) {
		alert(ship.make);
	}
	
	//forEach wants a callback function
	ships.forEach(item => {
		alert(item.name);
	});

	
}