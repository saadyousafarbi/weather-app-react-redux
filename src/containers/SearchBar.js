import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { Form } from 'react-bootstrap';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState(
            {term: event.target.value}
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState(
            {term : ''}
        );
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className='input-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Get forecast for your city'
                    value={this.state.term}
                    onChange={this.handleChange}
                />
                <span className='input-group-button'>
                    <button type='submit' className='btn btn-default'> Search </button>
                </span>
            </Form>
        );
    }
}


function mapDispatchToProps(dispatch) {
   return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
