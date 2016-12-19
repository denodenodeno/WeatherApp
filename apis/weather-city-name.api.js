const Arrow = require('arrow');
const request = require('request');
const config = require('../conf/config');


const ForecastByCityId = Arrow.API.extend({
    group: 'weather',
    path: '/api/weather/city/:name',
    method: 'GET',
    after: 'afterWeather',
    description: 'Returns current weather conditions for a city. Accepts the name of the city.',
    parameters: {
        name: {
            type: 'path',
            description: 'City name'
        }
    },
    action: function (req, res, next) {
        const requestOptions = {
            url: `${config.OPEN_WEATHER_MAP_URL}/weather?q=${req.params.name}&appid=${config.API_KEY}&units=${config.UNITS}`,
            method: 'GET',
            json: true
        };
        
        request(requestOptions, (err, resp, body) => {
            res.send(body);
            next();
        });
    }
});

module.exports = ForecastByCityId;