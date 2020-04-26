import React, { Component } from 'react'

export class Thermostat extends Component {

  constructor(props) {
    super(props)
    this.DEFAULT_TEMP = 20
    this.MINIMUM_TEMPERATURE = 10
    this.PS_ON_MAX_TEMP = 25
    this.PS_OFF_MAX_TEMP = 32
    this.LOW_USAGE_TEMP = 18
    this.HIGH_USAGE_TEMP = 25
    this.state = {
      maxTemp: this.PS_ON_MAX_TEMP,
      temperature: this.DEFAULT_TEMP,
      powerSaving: true
    }
  }

  up = () => {
    if(this.state.temperature < this.state.maxTemp){
      this.setState({temperature: this.state.temperature + 1})
    };
  };

  down = () => {
    if(this.state.temperature > this.MINIMUM_TEMPERATURE){
      this.setState({temperature: this.state.temperature - 1})
    }
  };

  reset = () => {
    this.setState({temperature: this.DEFAULT_TEMP})
  };

  togglePowerSaving = () => {
    this.setState({
      powerSaving: !this.state.powerSaving,
      maxTemp: !this.state.powerSaving ? this.PS_ON_MAX_TEMP : this.PS_OFF_MAX_TEMP
    })
  };

  render() {

    let powerSaving = this.state.powerSaving ? 'On' : 'Off'

    return (
      <div>
        <h1>Thermostat</h1>
        <div id="temperature-wrapper">
          <h2 id="temperature">{this.state.temperature}</h2>
          <div id="sun" className="glow breathe"></div>
        </div>

        <div className="controls">
          <button onClick={this.up}>+</button>
          <button onClick={this.down}>-</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.togglePowerSaving}>Power Saving {powerSaving}</button>
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
