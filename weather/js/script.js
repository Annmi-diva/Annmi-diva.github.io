//to show last modified date and time//
let dateTime = document.lastModified
document.querySelector("#update_info").textContent = ("Last Update: " + dateTime);


const menubutton = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);


