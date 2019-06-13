import React, { Component } from 'react'

// 事件中传参，推荐使用
class App extends Component {
  constructor(props) {
    super(props);
  }
  btnClickFn (id) {
    console.log(id, this)
  }

  render () {
    const _this = this
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this, 22)}>react按钮</button>
      </div>
    )
}
}

export default App;