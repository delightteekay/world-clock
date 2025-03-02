function updateTime() {

// Thohoyandou

let thohoyandouElement = document.querySelector("#thohoyandou");
if (thohoyandouElement) {
let thohoyandouDateElement = thohoyandouElement.querySelector(".date");
let thohoyandouTimeElement = thohoyandouElement.querySelector(".time");
let thohoyandouTime = moment();

thohoyandouDateElement.innerHTML = thohoyandouTime.format("MMMM Do YYYY");
thohoyandouTimeElement.innerHTML = thohoyandouTime.format("h:mm:ss [<small>]A[</small>]");

}


// Tshilamba

let tshilambaElement = document.querySelector("#tshilamba");
  if (tshilambaElement) {
let tshilambaDateElement = tshilambaElement.querySelector(".date");
let tshilambaTimeElement = tshilambaElement.querySelector(".time");
let tshilambaTime = moment();

tshilambaDateElement.innerHTML = tshilambaTime.format("MMMM Do YYYY");
tshilambaTimeElement.innerHTML = tshilambaTime.format("h:mm:ss [<small>]A[</small>]");

  }

}

function updateCity(event) {
let cityTimezone = Event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
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
  `;

}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity)
