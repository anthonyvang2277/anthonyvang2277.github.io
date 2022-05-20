
function start() {
	//car
	var div = document.getElementById('car');
	var style = getComputedStyle(div);
	var left = style.getPropertyValue("left");
	new Effect.Move('car', { x: 2500, y: 0, mode: 'relative', duration: 6.0, afterFinish: carLoop });

	function carLoop() {
		document.getElementById('car').style.left = left;
		new Effect.Move('car', { x: 2500, y: 0, mode: 'relative', duration: 6.0, afterFinish: carLoop });
	}

	//car1
	var div1 = document.getElementById('car1');
	var style1 = getComputedStyle(div1);
	var left1 = style1.getPropertyValue("left");
	new Effect.Move('car1', { x: -3600, y: 0, mode: 'relative', duration: 4.0, afterFinish: carLoop1 });

	function carLoop1() {
		document.getElementById('car1').style.left = left1;
		new Effect.Move('car1', { x: -3600, y: 0, mode: 'relative', duration: 4.0, afterFinish: carLoop1 });
	}

	//bus
	var divBus = document.getElementById('bus');
	var styleBus = getComputedStyle(divBus);
	var leftBus = styleBus.getPropertyValue("left");
	new Effect.Move('bus', { x: 3650, y: 0, mode: 'relative', duration: 5.0, afterFinish: busLoop });

	function busLoop() {
		document.getElementById('bus').style.left = leftBus;
		new Effect.Move('bus', { x: 3650, y: 0, mode: 'relative', duration: 5.0, afterFinish: busLoop });
	}

	//bus1
	var divBus1 = document.getElementById('bus1');
	var styleBus1 = getComputedStyle(divBus1);
	var leftBus1 = styleBus1.getPropertyValue("left");
	new Effect.Move('bus1', { x: -3600, y: 0, mode: 'relative', duration: 6.0, afterFinish: busLoop1 });

	function busLoop1() {
		document.getElementById('bus1').style.left = leftBus1;
		new Effect.Move('bus1', { x: -3600, y: 0, mode: 'relative', duration: 6.0, afterFinish: busLoop1 });
	}

	//Night to Day

	var divMoon = document.getElementById('moon');
	var divSun = document.getElementById('sun');
	var styleMoon = getComputedStyle(divMoon);
	var styleSun = getComputedStyle(divSun);
	var leftMoon = styleMoon.getPropertyValue("left");
	var leftSun = styleSun.getPropertyValue("left");

	function skyNight() {
		document.getElementById("sun").style.left = leftSun; 
		$('background').fade({ duration: 30.0, from: 1, to: 0 });
		$('cityNight').fade({ duration: 15.0, from: 1, to: 0 });
		new Effect.Move('moon', { x: 2100, y: 0, mode: 'relative', duration: 20.0 });
		new Effect.Opacity('stars', { from: 1, to: 0, duration: 20 });
		$('background1').appear({ duration: 30.0, from: 0, to: 1, afterFinish: skyDay });
	}

	function skyDay() {
		document.getElementById("moon").style.left = leftMoon; 
		$('background').appear({ duration: 30.0, from: 0, to: 1 });
		$('cityNight').appear({ duration: 15.0, from: 0, to: 1 });
		new Effect.Move('sun', { x: 2100, y: 0, mode: 'relative', duration: 20.0 });
		new Effect.Opacity('stars', { from: 0, to: 1, duration: 20 });
		$('background1').fade({ duration: 30.0, from: 1, to: 0, afterFinish: skyNight  });
		
	}
	skyNight();


}

function arrowClick1() {
	Effect.Puff('b1',{ afterFinish: afterClick1});

}

function arrowClick2() {
	Effect.Puff('b2',{ afterFinish: afterClick2});

}

function arrowClick3() {
	Effect.Puff('b3',{ afterFinish: afterClick3});

}


function afterClick1() {
	document.getElementById('b1').innerHTML = "<p>We provide excellent services and deliver on our promises to all of loyal members.</p>"
	$('b1').appear({ duration: 1.0, from: 0, to: 1 });
}

function afterClick2() {
	document.getElementById('b2').innerHTML = "<p>Choose What's Right For You</p>"
	$('b2').appear({ duration: 1.0, from: 0, to: 1 });
}

function afterClick3() {
	document.getElementById('b3').innerHTML = "<p>Place Holder</p>"
	$('b3').appear({ duration: 1.0, from: 0, to: 1 });
}

