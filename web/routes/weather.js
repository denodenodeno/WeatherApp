const Arrow = require('arrow');


const WeatherRoute = Arrow.Router.extend({
    name: 'weather',
    path: '/',
    method: 'GET',
    description: 'Route for weather page. Returns main layout.',
    action: function (req, res) {
        res.render('index');
    }
});

module.exports = WeatherRoute;
