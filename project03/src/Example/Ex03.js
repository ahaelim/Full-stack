import React, { useState } from 'react'


const Ex03 = () => {

    const [rdNum, setRdNum] = useState(0)
    const [inputNum,setInputNum] = useState(0)

    const btnCk = (event) =>{
        setInputNum(parseInt(event.target.innerText))
        setRdNum(parseInt(Math.random()*3+1))
    }
    // 1. 랜덤한 수를 뽑아준다.
    // 범위는 1~3

    // 2. 누른 버튼의 숫자를 랜덤한 수와 비교
    //      => 함수를 따로 만드는 걸 추천
    
    // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면
    //      정답입니다!
    //      다르다면, '땡!' 을 출력할 것
  return (
    <div>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>
        <div>
            랜덤 : {rdNum}
            <br/>
            입력수 : {inputNum}
            <br/>
            {inputNum === rdNum 
            ? <p>정답입니다</p>
            : <p>땡</p>}
        </div>
    </div>
  )
}

export default Ex03