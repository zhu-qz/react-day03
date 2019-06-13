import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  changeMsg () {
    this.setState ({
      msg: 'hello msg'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.changeMsg.bind(this) }>修改</button>
      </div>
    )
  }
}

export default App;