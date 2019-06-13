import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.changeMsg= this.changeMsg.bind(this)
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
        <button onClick = { this.changeMsg }>修改</button>
      </div>
    )
  }
}

export default App;