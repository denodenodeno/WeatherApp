const Arrow = require('arrow');

const ForecastRoute = Arrow.Router.extend({
    name: 'forecast',
    path: '/forecast/city/:name',
    method: 'GET',
    description: 'Route for forecast page. Returns main layout.',
    action: function (req, res) {
        res.render('index');
    }
});

module.exports = ForecastRoute;
