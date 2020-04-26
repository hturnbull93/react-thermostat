import React, { Component } from 'react'

export class Thermostat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      DEFAULT_TEMP: 20,
      temperature: this.DEFAULT_TEMP,
      powerSaving: true,
      MINIMUM_TEMPERATURE: 10,
      PS_ON_MAX_TEMP: 25,
      PS_OFF_MAX_TEMP: 32,
      LOW_USAGE_TEMP: 18,
      HIGH_USAGE_TEMP: 25
    }
  }


  render() {
    return (
      <div>
        <h1>Thermostat</h1>
        <div id="temperature-wrapper">
          <h2 id="temperature">20</h2>
          <div id="sun" className="glow breathe"></div>
        </div>

        <div className="controls">
          <button id="up">+</button>
          <button id="down">-</button>
          <button id="reset">Reset</button>
          <button id="toggle-power-saving">Power Saving <span id="power-saving"></span></button>
        </div>

        <h2>World Weather</h2>
        <form id="select-city">
          <input id='current-city' type='text' placeholder="Enter city" />
          <input id="weather-submit" type='submit' value='Go' />
        </form>
        <h3 id="weather-report">Awaiting input...</h3>

      </div>
    )
  }
}

export default Thermostat
