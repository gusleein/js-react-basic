/**
 * Created by @gusleein (Andrey Sanatullov)
 * https://github.com/gusleein
 *
 * on 23/03/2020.
 */
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {microseconds: 0};
  }

  tick() {
    this.setState(state => ({microseconds: state.microseconds + 1}));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        Timer:
        <br/>
        {this.state.microseconds / 100}
      </div>
    )
  }
}

export default Timer;