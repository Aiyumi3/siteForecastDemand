//import Controller from './controller.js';

//const weather = new Controller();

const form = document.querySelector("form");
const input = document.querySelector("#inp-name");
const msg = document.querySelector(".text-danger");

form.addEventListener("submit", e => {
   e.preventDefault();
  let inputVal = input.value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=65fadf9c874327f520bf18defed24255&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather, coord, wind } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;



            const weatherHtml = `
            <div class="card mb-4" style="border-radius: 17px; margin: 15px;">
               <div class="row no-gutters">
                
                  <div class="col-8 col-xl-7">
                    <div class="float-left">
                      <img src="${icon}" class="card-img" alt="weather" style="margin: 7px">
                      </div>
                      </div> <div class="card-body">
                         <p class="card-text" ><span style="color: #54315c;font-size:15pt;font-weight: 400; 
                         padding-left: 10px; text-align: center">   ${weather[0]["description"]}</span></p>
                         <p class="card-text"><span style="font-size:20pt;font-weight: 700;">${Math.round(main.temp)}<sup style="background-color: #ffe4c4;
                         border-radius: 10px">°C</sup></span><br> min: ${Math.round(main.temp_min)}<sup style="background-color: bisque;
                         border-radius: 10px">°C</sup>,
                          max: ${Math.round(main.temp_max)}<sup style="background-color: bisque;
                         border-radius: 10px">°C</sup><br>
                          humidity 💧: ${main.humidity}  %<br>
                          wind speed: ${wind["speed"]} m/s
                         <br> <small class="text-muted">coords: ${coord["lon"]}, ${coord["lat"]}</small>
                         </p>
                         <h5 class="card-title"> ${name}, <span style="background-color: #efd0f7;
                         border-radius: 11px">${sys.country}</span></h5>
                      </div>
               </div>
            </div>
            `;
            const contWeather = document.querySelector('.container #weather-container');
            contWeather.insertAdjacentHTML('afterbegin', weatherHtml);
        })
        .catch(() => {
            msg.textContent = "enter a valid city!";
       });

    msg.textContent = "";
    form.reset();
    input.focus();
});