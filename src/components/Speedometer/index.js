import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAcceleration = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
        </div>
        <h1 className="speeder">Speed is {speed}mph</h1>
        <p className="min-max-speed">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-card">
          <button
            className="button-1"
            type="button"
            onClick={this.onAcceleration}
          >
            Accelerate
          </button>
          <button
            className="button-2"
            type="button"
            onClick={this.onApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
