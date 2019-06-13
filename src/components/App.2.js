import React, { Component } from 'react'

// 解决this指向问题 --- 构造器
class App extends Component {
  constructor(props) {
    super(props);
    this.btnClickFun = this.btnClickFn.bind(this)
    console.log('1', this);
  }
  btnClickFn () {
    console.log('2', this)
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFun }>react按钮</button>
      </div>
    )
}
}

export default App;