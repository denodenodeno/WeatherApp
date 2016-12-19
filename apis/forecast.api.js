const Arrow = require('arrow');
const request = require('request');
const config = require('../conf/config');


const ForecastAPI = Arrow.API.extend({
    group: 'forecast',
    path: '/api/forecast/city/:name',
    method: 'GET',
    after: 'afterForecastByCityName',
    description: 'Provides 5 day forecast for a given city. Accepts city name as parameter.',
    parameters: {
        name: {
            type: 'path',
            description: 'City name'
        }
    },
    action: function (req, res, next) {
        
        const requestOptions = {
            url: `${config.OPEN_WEATHER_MAP_URL}/forecast/daily?q=${req.params.name}&appid=${config.API_KEY}&cnt=${config.FORECAST_DAYS_NUMBER}&units=${config.UNITS}`,
            method: 'GET',
            json: true
        };
        
        request(requestOptions, (err, resp, body) => {
            res.send(body);
            next();
        });
    }
});

module.exports = ForecastAPI;