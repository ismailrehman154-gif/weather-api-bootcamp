document.querySelector('.temp').addEventListener('click',checkTemp)

function checkTemp(){
    const inputVal = document.querySelector('.cityName').value
const url = (`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=a7cd9d6f231fa5ce3c49b0c0373bc369`)

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const icon = data.weather[0].icon
        const condition = data.weather[0].description
        // console.log(data.weather.icon)
        

        document.querySelector('.feelsLike').innerText = `the weather in ${inputVal} feels like` + ' ' + data.main.temp+ ' C'
        document.querySelector('.chicken').innerText = `the weather in ${inputVal} is` + ' ' + data.main.feels_like+ ' C'
        document.querySelector('.condition').innerText = `You can expect ${condition}`
        document.querySelector('.icon').src = `https://openweathermap.org/payload/api/media/file/${icon}.png`
        
    })


//     .catch(err => {
//     console.log(`error ${err}`)
// })
}


