const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJSonObject) {
    // console.table(myJSonObject); // temporary checking for valid response and data parsing
    const jSonTowns = myJSonObject['towns'].filter((jSonTowns) => {
        if(jSonTowns.name === "Soda Springs" || jSonTowns.name === "Fish Haven" || jSonTowns.name === "Preston") {
            return jSonTowns;
        }
    });

    for (let i = 0; i < jSonTowns.length; i++) {
		//Variables
		let zoneElemnt = document.createElement('section');
		let zoneElemnt2 = document.createElement('div');
		let Tittle = document.createElement('h1');

		let Motto = document.createElement("h2");

		let year = document.createElement("h3");

		let population = document.createElement("h3");

		let Rainfall = document.createElement("h3");

		let imageTown = document.createElement("img");

		//append each child element 

		Tittle.textContent = jSonTowns[i].name;
		zoneElemnt.appendChild(Tittle);

		Motto.textContent = jSonTowns[i].motto;
		zoneElemnt.appendChild(Motto);

		year.textContent = "Year Founded: " + jSonTowns[i].yearFounded;
		zoneElemnt.appendChild(year);

		population.textContent = "Population: " + jSonTowns[i].currentPopulation;
		zoneElemnt.appendChild(population);

		Rainfall.textContent = "Annual Rain Fall: " + jSonTowns[i].averageRainfall;
		zoneElemnt.appendChild(Rainfall);

		imageTown.setAttribute("src", "img/" + jSonTowns[i].photo);
		imageTown.setAttribute("alt", jSonTowns[i].name + " - " + (i + 1));
		zoneElemnt2.appendChild(imageTown);
		let zoneClass = "div.zone" + (i + 1);
		document.querySelector(zoneClass).appendChild(zoneElemnt);
		document.querySelector(zoneClass).appendChild(zoneElemnt2);
    }
  });
