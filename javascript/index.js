function updateTime() {

// Johannesburg

let johannesburgElement = document.querySelector("#johannesburg");
if (johannesburgElement) {
let johannesburgDateElement = johannesburgElement.querySelector(".date");
let johannesburgTimeElement = johannesburgElement.querySelector(".time");
let JohannesburgTime = moment().tz("Africa/Johannesburg");

johannesburgDateElement.innerHTML = JohannesburgTime.format("MMMM Do YYYY");
johannesburgTimeElement.innerHTML = JohannesburgTime.format("h:mm:ss [<small>]A[</small>]");

}


// Montreal

let montrealElement = document.querySelector("#montreal");
if (montrealElement) {
let montrealDateElement = montrealElement.querySelector(".date");
let montrealTimeElement = montrealElement.querySelector(".time");
let montrealTime = moment().tz("America/Montreal");

montrealDateElement.innerHTML = montrealTime.format("MMMM Do YYYY");
montrealTimeElement.innerHTML = montrealTime.format("h:mm:ss [<small>]A[</small>]");

}

}

function updateCity(event) {
let cityTimezone = event.target.value;
if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
}
let cityName = cityTimezone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimezone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city">
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
"A"
)}</small></div>
</div>
<a href="/">All cities</a>
`;

}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity)
