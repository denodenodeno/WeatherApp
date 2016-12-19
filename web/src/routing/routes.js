import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from '../components/Layout';
import WeatherPage from '../containers/WeatherPage/WeatherPage';
import ForecastPage from '../containers/ForecastPage/ForecastPage';


const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={WeatherPage} />
        <Route path="/forecast/city/:name" component={ForecastPage}/>
    </Route>
);

export default routes;