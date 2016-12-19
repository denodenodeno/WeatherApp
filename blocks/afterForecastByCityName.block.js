const Arrow = require('arrow');
const shortid = require('shortid');
const convertTimeToDate = require('../utils/utils').convertTimeToDate;

const AfterForecastByCityNameBlock = Arrow.Block.extend({
    name: 'afterForecastByCityName',
    description: `
        Modifies response object to send only necessary data to the client. 
        Calculates min and max temp for the provided data period.
    `,
    action: function (req, res, next) {
        'use strict';
        
        const data = JSON.parse(res.body);
        let result = {
            cityName: data.city.name,
            period: {
                minTemp: data.list.reduce((prev, curr) => prev.temp.min < curr.temp.min ? prev : curr).temp.min,
                maxTemp: data.list.reduce((prev, curr) => prev.temp.max > curr.temp.max ? prev : curr).temp.max
            },
            forecast: []
        };
        
        result.forecast = data.list.map(day => (
            {
                id: shortid.generate(),
                day: convertTimeToDate(day.dt),
                minTemp: day.temp.min,
                maxTemp: day.temp.max,
                humidity: day.humidity,
                iconName: day.weather[0].icon,
                description: day.weather[0].main,
                windSpeed: day.speed
            }
        ));
        
        res.send(result);
        next();
    }
});

module.exports = AfterForecastByCityNameBlock;