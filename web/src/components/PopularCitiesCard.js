import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Panel, Media, ListGroup, ListGroupItem} from 'react-bootstrap';

const PopularCitiesCard = ({popularCities}) => (
    <Panel>
        <Media.List>
            <Media.ListItem>
                <Media.Body className="text-center">
                    <Media.Heading>
                        Popular destinations
                    </Media.Heading>
                    <ListGroup>
                        {
                            popularCities.map(city => (
                                <ListGroupItem key={city}>
                                    <Link to={`/forecast/city/${city}`}>
                                        {city}
                                    </Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Media.Body>
            </Media.ListItem>
        </Media.List>
    </Panel>
);

PopularCitiesCard.propTypes = {
    popularCities: PropTypes.array.isRequired
};

export default PopularCitiesCard;