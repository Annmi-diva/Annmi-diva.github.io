const requestInfo = "../scoots/data/rental.json";

fetch(requestInfo)
  .then(function (response) {
    return response.json();
  })

  .then(function (myJSonObject) {
    // console.table(myJSonObject); // temporary checking for valid response and data parsing
    const jSonRentals = myJSonObject['rentals'].filter((jSonRentals) => {
            return jSonRentals;
    });

    for (let i = 0; i < jSonRentals.length; i++) {
		//Variables
		let zoneElemnt = document.createElement('section');
		let zoneElemnt2 = document.createElement('div');

        let photo = document.createElement("img");
        
		let Tittle = document.createElement('h1');

		let passangers = document.createElement("h3");

		let engine = document.createElement("h3");

		let mpg = document.createElement("h3");

		let transmission = document.createElement("h3");

		let power = document.createElement("h3");

		let drive = document.createElement("h3");

        let button = document.createElement("button");

		//append each child element 

        photo.setAttribute("src", "img/" + jSonRentals[i].photo);
		photo.setAttribute("alt", jSonRentals[i].rentalType + " - " + (i + 1));
		zoneElemnt2.appendChild(photo);

		Tittle.textContent = jSonRentals[i].rentalType;
		zoneElemnt.appendChild(Tittle);

		passangers.textContent = "Passangers:" + jSonRentals[i].capacity;
		zoneElemnt.appendChild(passangers);

		engine.textContent = "Engine:" + jSonRentals[i].Engine;
		zoneElemnt.appendChild(engine);

		mpg.textContent = "MPG: " + jSonRentals[i].MPG;
		zoneElemnt.appendChild(mpg);

		transmission.textContent = "Transmission: " + jSonRentals[i].Transmission;
		zoneElemnt.appendChild(transmission);

		power.textContent = "Power:" + jSonRentals[i].Horsepower;
		zoneElemnt.appendChild(power);

		drive.textContent = "Drive:" + jSonRentals[i].Drivetrain;
		zoneElemnt.appendChild(drive);

        button.textContent = "Rent";
		zoneElemnt.appendChild(button);

		let zoneClass = "div.zoneR" + (i + 1);
		document.querySelector(zoneClass).appendChild(zoneElemnt);
		document.querySelector(zoneClass).appendChild(zoneElemnt2);
    }
  });