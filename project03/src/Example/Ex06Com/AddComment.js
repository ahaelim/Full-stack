import React, { useState } from 'react'
import CommentList from './CommentList'

const AddComment = ({handleComment}) => {

    const [value, setValue] = useState('')

    // 1. input 내 변화 값 감지
    function inputHandle(e) {
      setValue(e.target.value)
    }
    // 2. '+' 버튼 클릭 시, input값을 어딘가에 세팅
    function btnHandle() {
      console.log('현재 댓글', value)
      // 3. 세팅된 그 값을 상위 컴포넌트로 전송
      handleComment(value)
      // 4. input 창을 비워줄 것 
      setValue('')
    }
    const enterHandle = (e) =>{
      e.code === "Enter" && btnHandle()
    }



  return (
    <div>
        <input 
        onChange={inputHandle} 
        value={value}
        onKeyPress={enterHandle}
        > 
        </input>
        <button onClick={btnHandle}>+</button>
    </div>
  )
}

export default AddComment