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
        <button onClick = { (e) => this.changeMsg(e) }>修改</button>
      </div>
    )
  }
}

export default App;