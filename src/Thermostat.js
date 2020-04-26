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

    let powerSaving = this.powerSaving ? 'on' : 'off'

    return (
      <div>
        <h1>Thermostat</h1>
        <div id="temperature-wrapper">
          <h2 id="temperature">{this.temperature}</h2>
          <div id="sun" className="glow breathe"></div>
        </div>

        <div className="controls">
          <button onClick={}>+</button>
          <button onClick={}>-</button>
          <button onClick={}>Reset</button>
          <button onClick={}>Power Saving {powerSaving}</button>
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
