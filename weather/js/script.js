//to show last modified date and time//
const d = new Date();
let date = d.getDate();

let day;

day = d.getDay();

let month;
month = d.getMonth();

let year;
year = d.getFullYear();

let message;

switch(day){
    case 0:
        message = 'Sunday';
        break;
    case 1:
        message = 'Monday';
        break;
    case 2:
        message = 'Tuesday';
        break;
    case 3:
        message = 'Wednesday';
        break;
    case 4:
        message = 'Thursday';
        break;
    case 5:
        message = 'Friday';
        break;
    case 6:
        message = 'Saturday';
        break;
    default:
        message = 'Unknown - ' + day;
        break;
}

let message2;

switch(month){
    case 0:
        message2 = 'January';
        break;
    case 1:
        message2 = 'February';
        break;
    case 2:
        message2 = 'March';
        break;
    case 3:
        message2 = 'April';
        break;
    case 4:
        message2 = 'May';
        break;
    case 5:
        message2 = 'June';
        break;
    case 6:
        message2 = 'July';
        break;

    case 7:
        message2 = 'August';
        break;
    case 8:
        message2 = 'September';
        break;
    case 9:
        message2 = 'October';
        break;
    case 10:
        message2 = 'November';
        break;
    case 11:
        message2 = 'December';
        break;
    default:
        message2 = 'Unknown - ' + month;
        break;

}

const fullDate = message + ", " + date + " " + message2 + " " + year;

document.getElementById("date").textContent = fullDate;

const menubutton = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

menubutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


