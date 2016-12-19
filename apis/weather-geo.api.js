const Arrow = require('arrow');
const request = require('request');
const config = require('../conf/config');


const ForecastByCityId = Arrow.API.extend({
    group: 'weather',
    path: '/api/weather/city/geo',
    method: 'GET',
    after: 'afterWeather',
    description: 'Returns current weather conditions for a city. Accepts geolocation coordinates.',
    parameters: {
        lat: {
            type: 'query',
            description: 'City latitude coordinates'
        },
        lon: {
            type: 'query',
            description: 'City longitude coordinates'
        }
    },
    action: function (req, res, next) {
        const requestOptions = {
            url: `${config.OPEN_WEATHER_MAP_URL}/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${config.API_KEY}&units=${config.UNITS}`,
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