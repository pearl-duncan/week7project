const APIkey = 'bfa91dc14a38ff19059d53e31f199f85'; 

const getWeather = async (e) => {
    e.preventDefault();
    console.log('form submitted')
    const weatherElement = e.target.querySelector('#location');
    const location = weatherElement.value;
    console.log(location)
    console.log(e.target)
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d4d05fb9e1397fcfdac7c10828db5df9&units=imperial`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    console.log(e.target.location)
    console.log(e.target.location.value)

    const container = document.getElementById('container')
    let card =`
        <div class="card text-bg-dark", position= justify>
            <div class="card">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.weather.main}</p>
                <p class="card-text">${data.main.temp}</p>
                <p class="card-text">${data.main.feels_like}</p>
                <p class="card-text">${data.main.temp_max}</p>
                <p class="card-text">${data.main.temp_min}</p>
                <p class="card-text">${data.main.humidity}</p>
            </div>
        </div>`
    container.innerHTML = card
}
const form = document.querySelector('form')
form.addEventListener('submit', getWeather)