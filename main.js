APIkey = d4d05fb9e1397fcfdac7c10828db5df9
const getWeather = async (e) => {
    e.preventDefault();
    console.log('form submitted')

    let weather = e.target.weather.value
    if (weather == '')weather = ''
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)





const container = document.getElementById('container')
let card =`
    <div class="card text-bg-dark">
        <img src="https://i.ytimg.com/vi/n2ZfESR-WBs/maxresdefault.jpg" class="card-img" alt="weather background"></img>
        <div class="card-img-overlay">
            <h5 class="card-title">${data.city}</h5>
            <p class="card-text">${data.forcast}</p>
            <p class="card-text">${data.temp}</p>
            <p class="card-text">${data.feels_like}</p>
            <p class="card-text">${data.high}</p>
            <p class="card-text">${data.low}</p>
            <p class="card-text">${data.humidity}</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
    </div>`

    container.innerHTML = card

}