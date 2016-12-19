import React, {Component, PropTypes} from 'react';
import Header from './Header';
import {Grid, Row} from 'react-bootstrap';

class Layout extends Component {
    
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return (
            <Grid fluid={true}>
                <Header includeBackButton={this.props.location.pathname.indexOf('forecast') > 0} />
                <Row className="show-grid">
                    {this.props.children}
                </Row>
            </Grid>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
};

export default Layout;