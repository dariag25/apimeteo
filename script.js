let input = document.querySelector(".input")
let button = document.querySelector(".button")
let div = document.querySelector(".div")

button.addEventListener("click", data)
function data() {
    let inputdata = input.value
    getcity(inputdata)
}
getcity()
function getcity(inputdata) {

if (inputdata == undefined) {
    inputdata = "Bucharest"
} else {
    
}

console.log(inputdata)
const apilink = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&appid=21f5d98c67aebaf2c2880c2d66ca2a54`
fetch(apilink)
    .then(response => response.json())
    .then(result => showweatherfn(result))

}


function showweatherfn(result) {
    console.log(result)
    console.log(result.name)




    let temp = (result.main.temp - 273.15).toFixed(1)
    let desc = result.weather[0].description
    let icon = result.weather[0].icon
    let humid = result.main.humidity
    let wind = result.wind.deg
    let main = result.weather[0].main

    let cardinal = (wind == 0) ? "N"
        : (wind > 0 && wind < 90) ? "NE"
            : (wind == 90) ? "E"
                : (wind > 90 && wind < 180) ? "SE"
                    : (wind == 180) ? "S"
                        : (wind > 180 && wind < 270) ? "SW"
                            : (wind == 270) ? "W"
                                : (wind > 270 && wind < 360) ? "NW"
                                    : ""

 
    console.log(icon)
    div.innerHTML = ""
    div.innerHTML +=
        `
    <p class="city" >${result.name}</p>
    <p>${temp}°C</p>
    <p>${desc}</p>
    <img src="img/${icon}.png" alt="${main}" class="icon">
    <p>humidity: ${humid}</p>
    <p> ${cardinal}</p>
    <p> ${result.wind.speed}</p>
    <p>${result.main.pressure}</p>
    <p>${cardinal}</p>
    `

}