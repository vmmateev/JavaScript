function attachEvents() {
    document.getElementById('submit').addEventListener('click', getForecast);
}

async function getForecast() {

    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    currentDiv.replaceChildren();
    upcomingDiv.replaceChildren();

    const inputLabel = document.getElementById('location');

    const cityName = inputLabel.value;
    let code = '';

    try {
        code = await getCode(cityName);
    } catch (error) {
        alert('Wrong city for blank field');

        inputLabel.value = '';
    }

    const [current, upcoming] = await Promise.all([getCurrent(code), getUpcoming(code)]);

    let weatherSymbol = '☀';
    const degreeSymbol = '°';

    if (current.forecast.condition == 'Partly sunny') {
        weatherSymbol = '⛅';
    } else if (current.forecast.condition == 'Overcast') {
        weatherSymbol = '☁';
    } else if (current.forecast.condition == 'Rain') {
        weatherSymbol = '☂';
    }

    document.getElementById('forecast').style.display = 'block';

    const divForecasts = createEl('div', 'forecasts');
    const spanSymbol = createEl('span', 'condition symbol', weatherSymbol);
    const spanCondition = createEl('span', 'condition');

    const spanNameFirstData = createEl('span', 'forecast-data', current.name);
    const spanTempSecondData = createEl('span', 'forecast-data', `${current.forecast.low}${degreeSymbol}/${current.forecast.high}${degreeSymbol}`);
    const spanWeatherThirdData = createEl('span', 'forecast-data', current.forecast.condition);

    divForecasts.appendChild(spanSymbol);
    divForecasts.appendChild(spanCondition);

    spanCondition.appendChild(spanNameFirstData);
    spanCondition.appendChild(spanTempSecondData);
    spanCondition.appendChild(spanWeatherThirdData);

    currentDiv.appendChild(divForecasts);

    const divThreeDays = createEl('div', 'forecast-info');
    upcomingDiv.appendChild(divThreeDays);

    upcoming.forecast.forEach((el) => {

        weatherSymbol = '☀';
        if (el.condition == 'Partly sunny') {
            weatherSymbol = '⛅';
        } else if (el.condition == 'Overcast') {
            weatherSymbol = '☁';
        } else if (el.condition == 'Rain') {
            weatherSymbol = '☂';
        }

        const spanUpcoming = createEl('span', 'upcoming');
        const spanSymbol = createEl('span', 'symbol', weatherSymbol);
        const spanTempFirstData = createEl('span', 'forecast-data', `${el.low}${degreeSymbol}/${el.high}${degreeSymbol}`);
        const spanWeatherSecondData = createEl('span', 'forecast-data', el.condition);

        divThreeDays.appendChild(spanUpcoming);
        spanUpcoming.appendChild(spanSymbol);
        spanUpcoming.appendChild(spanTempFirstData);
        spanUpcoming.appendChild(spanWeatherSecondData);
        inputLabel.value = '';
    });
}

function createEl(type, className, text) {
    const el = document.createElement(type);
    if (className) {
        el.className = className;
    }
    if (text) {
        el.innerHTML = text;
    }
    return el;
}

async function getCode(cityName) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const response = await fetch(url);
    const data = await response.json();
    return data.find(label => label.name.toLowerCase() === cityName.toLowerCase()).code;
}

async function getCurrent(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getUpcoming(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

attachEvents();