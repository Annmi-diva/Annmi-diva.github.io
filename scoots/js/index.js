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
		let Tittle = document.createElement('h1');

		let passangers = document.createElement("h3");

		let photo = document.createElement("img");

		//append each child element 

		Tittle.textContent = jSonRentals[i].rentalType;
		zoneElemnt.appendChild(Tittle);

		passangers.textContent = "Passangers:" + jSonRentals[i].capacity;
		zoneElemnt.appendChild(passangers);


		photo.setAttribute("src", "img/" + jSonRentals[i].photo);
		photo.setAttribute("alt", jSonRentals[i].rentalType + " - " + (i + 1));
		zoneElemnt2.appendChild(photo);
		let zoneClass = "div.zone" + (i + 1);
		document.querySelector(zoneClass).appendChild(zoneElemnt);
		document.querySelector(zoneClass).appendChild(zoneElemnt2);
    }
  });
