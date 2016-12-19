import React, {Component} from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import apiService from '../../utils/apiService';
import WeatherCard from '../../components/WeatherCard';


class ForecastPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            model: null,
            error: false
        }
    }
    
    componentDidMount() {
        apiService.getForecast(this.props.routeParams.name)
            .then(res => {
                this.setState({
                    model: res.data
                });
            })
            .catch(err => console.error(err));
    }
    
    render() {
        const renderForecast = () => (
            <div>
                <PageHeader>
                    <div>
                        <small>5 day forecast for:</small>
                    </div>
                    <div>
                        {this.state.model.cityName}
                    </div>
                    <ul style={styles.list}>
                        <li>
                            <strong>Min</strong> temperature for the period:
                            {' '}
                            <strong>{this.state.model.period.minTemp}</strong> °C
                        </li>
                        <li>
                            <strong>Max</strong> temperature for the period:
                            {' '}
                            <strong>{this.state.model.period.maxTemp}</strong> °C
                        </li>
                    </ul>
                </PageHeader>
                
                {
                    this.state.model.forecast.map(day => (
                        <Col xs={4} md={3} key={day.id}>
                            <WeatherCard
                                cityName={this.state.model.cityName}
                                iconName={day.iconName}
                                humidity={day.humidity}
                                windSpeed={day.windSpeed}
                                day={day.day}
                                minTemp={day.minTemp}
                                maxTemp={day.maxTemp}/>
                        </Col>
                    ))
                }
            </div>
        );
        return (
            <Grid>
                <Row>
                    {
                        this.state.model != null
                            ? renderForecast()
                            : <Col className="text-center">Loading...</Col>
                    }
                </Row>
            </Grid>
        )
    }
}

const styles = {
    list: {
        marginTop: '10px',
        padding: '0',
        fontSize: '14px',
        color: '#999999',
        listStyle: 'none'
    }
};

export default ForecastPage;