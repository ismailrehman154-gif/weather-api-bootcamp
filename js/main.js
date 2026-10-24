document.querySelector('.temp').addEventListener('click',checkTemp)

function checkTemp(){
    const inputVal = document.querySelector('.cityName').value.toLowerCase()
    const inputValCountry = document.querySelector('.countryName').value.toLowerCase()
const url = (`/api/weather?q=${inputVal},${inputValCountry}`)

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const icon = data.weather[0].icon
        const condition = data.weather[0].description
        const fahrenheit = data.main.temp * 9/5 + 32
        const fahrenheitFeelsLike = data.main.feels_like * 9/5 + 32
        

        document.querySelector('.feelsLike').innerText = `the weather in ${inputVal} feels like` + ' ' + fahrenheit.toFixed(2)+ ' F'
        document.querySelector('.chicken').innerText = `the weather in ${inputVal} is` + ' ' + fahrenheitFeelsLike.toFixed(2)+ ' F'
        document.querySelector('.condition').innerText = `You can expect ${condition}`
        document.querySelector('.icon').src = `https://openweathermap.org/payload/api/media/file/${icon}.png`
        
    })


    .catch(err => {
    console.log(`error ${err}`)
})
}

