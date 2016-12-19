import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Panel, Media, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';

const WeatherCard = ({cityName, iconName, temp, humidity, windSpeed, day, minTemp, maxTemp}) => (
    <Panel>
        <Media.List>
            <Media.ListItem>
                <Media.Body className="text-center">
                    <img
                        src={`http://openweathermap.org/img/w/${iconName}.png`}
                        alt={cityName}/>
                    <Media.Heading>
                        {cityName}
                    </Media.Heading>
                    <ListGroup>
                        {
                            day ? (<ListGroupItem>{day}</ListGroupItem>) : ''
                        }
                        
                        {
                            temp ? (<ListGroupItem>{temp} °C</ListGroupItem>) : ''
                        }
                        <ListGroupItem>
                            <Glyphicon glyph="tint"/>
                            {' '}
                            {humidity} %
                        </ListGroupItem>
                        <ListGroupItem>
                            <Glyphicon glyph="leaf"/>
                            {' '}
                            {windSpeed} m/s
                        </ListGroupItem>
                        {
                            minTemp ? (<ListGroupItem>Min temperature: {minTemp} °C</ListGroupItem>) : ''
                        }
                        {
                            maxTemp ? (<ListGroupItem>Max temperature: {maxTemp} °C</ListGroupItem>) : ''
                        }
                    </ListGroup>
                    
                    <div>
                        <Link to={`/forecast/city/${cityName}`}>
                            Forecast for next five days
                        </Link>
                    </div>
                </Media.Body>
            </Media.ListItem>
        </Media.List>
    </Panel>
);

WeatherCard.propTypes = {
    cityName: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    temp: PropTypes.number,
    humidity: PropTypes.number.isRequired,
    day: PropTypes.string,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number
};

export default WeatherCard;