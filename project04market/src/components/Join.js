import React,{useRef, useState} from 'react'

const Join = () => {

        const [userData, setUserData] = useState({})
        const idRef = useRef()
        const pwRef = useRef()
        const nameRef = useRef()
        const seasonRef = useRef()
    const btnCk = () => {
        alert(`${seasonRef.current.value}을 좋아하는 ${nameRef.current.value}님 환영합니다!`)
        
        setUserData({
            'id' : idRef.current.value,
            'pw' : pwRef.current.value,
            'name' : nameRef.current.value,
            'season' : seasonRef.current.value
        })

        
    }
  return (
    <div>
        ID : <input type="text" 
        placeholder='ID를 입력하시오'
        ref = {idRef}
        ></input>
        <br/>
        PW : <input type="password" placeholder='PW를 입력하시오' ref = {pwRef}></input>
        <br/>
        이름 : <input type="text" placeholder='이름을 입력하시오' ref = {nameRef}></input>
        <br/>
        좋아하는 계절 : 
        <select ref={seasonRef}>
            <option >봄</option>
            <option >여름</option>
            <option >가을</option>
            <option>겨울</option>
        </select>
        <br></br>

        <button onClick={btnCk}>회원가입</button>
    </div>
  )
}

export default Join