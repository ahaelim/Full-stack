// 함수형 컴포넌트 구조 : rafce
// 클래스형 컴포넌트 구조 : rcc

import React, { Component } from 'react'

export default class Ex07 extends Component {

    // 1. Class Component 에서 state 관리
    constructor(props){
        super(props)
        this.state = {
            num : 0
        }
    }

    // 2. 함수는 선언 없이 사용
    ck = () => {
        console.log('ck')
        this.setState({
            num : this.state.num + 1
        })
    }


  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.ck}>+1</button>
      </div>
    )
  }
}
