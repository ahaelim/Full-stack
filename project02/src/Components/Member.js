import React from 'react'
import '../App.css'
// 매개변수로 object를 적을 때 주의!
// 1) ({속성}) =>  중괄호 생략 금지!
// 2) 다중 속성을 가져올 때
//    ({속성, 속성}) 하나의 객체 안에 다중 속성
const boxStyle ={
    border : '1px solid gray',
    backgroundColor : 'lightgrey',
    fontFamily: 'MonoplexKR-Italic',
    textAlign : 'center',
    marginTop : '20px',
    borderRadius : '20px'

}

const Member = ({teamName, name}) => {
  return (
    <div style={boxStyle}>
            <div><h3>{teamName}</h3></div>
            <hr/>
            <div>{name}</div>
    </div>
  )
}

export default Member