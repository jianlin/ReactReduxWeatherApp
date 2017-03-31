import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {

  weatherDetails() {
    return this.props.weatherList.map((weather) => {
      return (
        <tr>
          <td> {weather.city.name}</td>
          <td> {weather.city.country}</td>
          <td>{Math.round(10*(weather.list[0].main.temp - 273.15)) / 10} °C</td>
          <td>{weather.list[0].weather[0].description}</td>
          <td></td>
        </tr>
      )

    })
  }

  render() {
    return (
      <table className="table table-hover">
      <thead>
      <th>City</th>
      <th>Country</th>
      <th>Temperature</th>
      <th>Description</th>
      </thead>
      <tbody>
        {this.weatherDetails()}
      </tbody>
      </table>
    );
  }
}



function mapStateToProps(state) {    // HOW TO CONNECT APP STATE TO CONTAINER: map the app level state to props
  return {
    weatherList: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);    // HOW TO CONNECT APP STATE TO CONTAINER: export this smart component, AKA container
