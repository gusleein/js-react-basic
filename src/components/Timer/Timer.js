/**
 * Created by @gusleein (Andrey Sanatullov)
 * https://github.com/gusleein
 *
 * on 23/03/2020.
 */
import React from 'react';
import './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {microseconds: 0, timestamp: Date.now()};
  }

  tick() {
    /* ∆t */
    const dt = parseInt(((Date.now() - this.state.timestamp)).toString());
    this.setState(state => ({microseconds: this.state.microseconds + dt, timestamp: Date.now()}));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calcMs() {
    return (this.state.microseconds / 1000);
  }

  render() {
    return (
      <div className="Timer">
        Timer:
        <br/>
        <span className="Timer_value">{this.calcMs().toFixed(2)}</span>
      </div>
    );
  }
}

export default Timer;