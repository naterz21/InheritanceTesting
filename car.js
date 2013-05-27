function Car(name)
{
    this.Name = name;
}

Car.prototype.Drive = function()
{
    return "My name is " + this.Name + " and I'm driving!";
}

SuperCar.prototype = new Car();
SuperCar.prototype.constructor = SuperCar;

function SuperCar(name)
{
    Car.call(this, name);
}

SuperCar.prototype.Fly = function()
{
    return "My name is " + this.Name + " and I'm flying!";
}


//You never call start(), so I just took it off, since you are using document ready anyway

  //Added paranthesis to the new person(), because you are calling a function
	var myCar = new Car("Car");
	var mySuperCar = new SuperCar("SuperCar");

	//Remember to include jQuery before any code files that use it, because it is an interpreted language (I switched the order in the html file)
	$(document).ready(function() 
	{
		$("h1").html('');
		$("h1").append("<h1> It works here: </h1>" + mySuperCar.Drive());
		$("body").append($("<p></p>").text(mySuperCar.Fly()));
		$("body").append($("<p></p>").text(myCar.Drive()));
	}); //Added the end ); because remember, this is the end of a function call (ready)
