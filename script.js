// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6222368e17msh3b07c6fb82384efp150873jsncd3034c61028',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const fetchWeather = async (city) => {
	try {
		cityName.innerHTML = city + "'s";
		const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options);
		const result = await response.json();
		console.log(result);
		cloud_pct.innerHTML = result.cloud_pct;
		temp.innerHTML = result.temp;
		feels_like.innerHTML = result.feels_like;
		humidity.innerHTML = result.humidity;
		min_temp.innerHTML = result.min_temp;
		max_temp.innerHTML = result.max_temp;
		wind_speed.innerHTML = result.wind_speed + " ";
		wind_degrees.innerHTML = result.wind_degrees;
		sunrise.innerHTML = result.sunrise + " ";
		sunset.innerHTML = result.sunset + " ";
	} catch (error) {
		console.error(error);
	}
};

searchbutton.addEventListener("click", (e) => {
	e.preventDefault();
	fetchWeather(city.value);
})