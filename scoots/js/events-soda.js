const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJSonObject) {
    // console.table(myJSonObject); // temporary checking for valid response and data parsing
    const jSonTowns = myJSonObject['towns'].filter((jSonTowns) => {
        if(jSonTowns.name === "Soda Springs") {
            return jSonTowns;
        }
    });

    for (let i = 0; i < jSonTowns.length; i++) {
		//Variables

		let tittle = document.createElement('h2');

		let line = document.createElement("hr");

		let event1 = document.createElement("h3");

		let event2 = document.createElement("h3");

		let event3 = document.createElement("h3");


		//append each child element 

		tittle.textContent = "Upcoming Events:";
		document.querySelector("div.events").appendChild(tittle);

        document.querySelector("div.events").appendChild(line);

		eventsContent= jSonTowns[i].events;

        event1.textContent = eventsContent[0];
		document.querySelector("div.events").appendChild(event1);


        event2.textContent = eventsContent[1];
		document.querySelector("div.events").appendChild(event2);

 
        event3.textContent = eventsContent[2];
		document.querySelector("div.events").appendChild(event3);

    }
  });