const Arrow = require('arrow');

const AfterWeather = Arrow.Block.extend({
    name: 'afterWeather',
    description: 'Modifies response object to send only necessary data to the client.',
    action: function (req, res, next) {
        'use strict';
        
        const data = JSON.parse(res.body);
        let result = {
            cityName: data.name,
            iconName: data.weather[0].icon,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
        
        res.send(result);
        next();
    }
});

module.exports = AfterWeather;