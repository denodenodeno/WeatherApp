import React, {Component} from 'react';
import apiService from '../../utils/apiService';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import WeatherCard from '../../components/WeatherCard';
import PopularCitiesCard from '../../components/PopularCitiesCard';
import Search from '../../components/Search';


class WeatherPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            model: null,
            error: false,
            geolocation: true,
            popularCities: ['London', 'NewYork', 'Berlin', 'Madrid'],
            searchResult: null,
            searchQuery: ''
        };
        this._successCb = this._successCb.bind(this);
        this._errorCb = this._errorCb.bind(this);
        this._onSearchSubmit = this._onSearchSubmit.bind(this);
        this._renderSearchResults = this._renderSearchResults.bind(this);
        this._onSearchInputChange = this._onSearchInputChange.bind(this);
    }
    
    componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this._successCb, this._errorCb);
        }
    }
    
    _successCb(position) {
        apiService.getWeather({lat: position.coords.latitude.toFixed(1), lon: position.coords.longitude.toFixed(2)})
            .then(res => {
                if (res.data.cod !== 200) {
                    this.setState({
                        error: true
                    });
                }
                this.setState({
                    model: res.data
                });
            })
            .catch(err => console.error(err));
    }
    
    _errorCb() {
        this.setState({
            geolocation: false
        });
    }
    
    _onSearchInputChange(ev) {
        this.setState({
            searchQuery: ev.target.value
        })
    }
    
    _onSearchSubmit(ev) {
        ev.preventDefault();
        
        const search = () => {
            apiService.getWeatherByCityName(this.state.searchQuery)
                .then(res => {
                    this.setState({
                        searchResult: res.data
                    });
                })
                .catch(err => console.error(err));
        };
        
        this.state.searchQuery.length > 0
            ? search()
            : this.setState({
                searchResult: null
            });
    }
    
    _renderSearchResults() {
        return this.state.searchResult
            ? (
                <Col md={12}>
                    <WeatherCard
                        cityName={this.state.searchResult.cityName}
                        iconName={this.state.searchResult.iconName}
                        temp={this.state.searchResult.temp}
                        humidity={this.state.searchResult.humidity}
                        windSpeed={this.state.searchResult.windSpeed}/>
                </Col>
            )
            : '';
    }
    
    render() {
        const renderWeather = () => (
            <div>
                <Col md={8}>
                    {
                        this.state.geolocation
                            ? (
                                <div>
                                    <PageHeader>
                                        <div>
                                            <small>Current location:</small>
                                        </div>
                                        <div>
                                            {this.state.model.cityName}
                                        </div>
                                    </PageHeader>
                                    <Col xs={6} md={6}>
                                        <WeatherCard
                                            cityName={this.state.model.cityName}
                                            iconName={this.state.model.iconName}
                                            temp={this.state.model.temp}
                                            humidity={this.state.model.humidity}
                                            windSpeed={this.state.model.windSpeed}/>
                                    </Col>
                                </div>
                            )
                            : (
                                <PageHeader>
                                    <div>
                                        Geolocation API is blocked.
                                    </div>
                                    <div>
                                        <small>
                                            To see weather for your current location,
                                            allow "Geolocation" in your browser.
                                        </small>
                                    </div>
                                </PageHeader>
                            )
                    }
                    <Col xs={6} md={6}>
                        <PopularCitiesCard popularCities={this.state.popularCities}/>
                    </Col>
                </Col>
                <Col md={4} style={{paddingTop: '50px'}}>
                    <Search
                        onSearchSubmit={this._onSearchSubmit}
                        onSearchInputChange={this._onSearchInputChange} />
                    <div>
                        {
                            this._renderSearchResults()
                        }
                    </div>
                </Col>
            </div>
        );
        
        return (
            <Grid className="show-grid">
                <Row>
                    {
                        (this.state.model != null
                        || !this.state.geolocation)
                            ? renderWeather()
                            : <Col className="text-center">Loading...</Col>
                    }
                </Row>
            </Grid>
        )
    }
}

export default WeatherPage;