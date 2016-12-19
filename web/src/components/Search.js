import React, {PropTypes} from 'react';
import {FormGroup, FormControl, InputGroup, Button, Glyphicon} from 'react-bootstrap';

const Search = ({onSearchSubmit, onSearchInputChange}) => (
    <div>
        <p>
            <small>Search for city by name:</small>
        </p>
        <form onSubmit={onSearchSubmit}>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" onChange={onSearchInputChange}/>
                    <InputGroup.Button>
                        <Button type="submit">
                            <Glyphicon glyph="search"/>
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        </form>
    </div>
);

Search.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
    onSearchInputChange: PropTypes.func.isRequired
};

export default Search;