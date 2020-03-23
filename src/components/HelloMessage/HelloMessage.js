/**
 * Created by @gusleein (Andrey Sanatullov)
 * https://github.com/gusleein
 *
 * on 23/03/2020.
 */
import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}!
      </div>
    )
  }
}

export default HelloMessage;