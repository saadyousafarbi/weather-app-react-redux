import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import { Table } from 'react-bootstrap';

class WeatherList extends Component {
    renderWeather(cityWeatherData) {
        const name = cityWeatherData.city.name;
        const temps = cityWeatherData.list.map(weather => weather.main.temp);
        const humidity = cityWeatherData.list.map(weather => weather.main.humidity);
        const pressure = cityWeatherData.list.map(weather => weather.main.pressure);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color='orange' units='K'/>
                </td>
                <td>
                    <Chart data={humidity} color='blue' units='hPa'/>
                </td>
                <td>
                    <Chart data={pressure} color='green' units='%'/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature (K)</th>
                        <th> Pressure (hPa)</th>
                        <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </Table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
