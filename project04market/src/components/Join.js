import React,{useEffect, useRef, useState} from 'react'

const Join = () => {

        const [userData, setUserData] = useState({})
        const idRef = useRef()
        const pwRef = useRef()
        const nameRef = useRef()
        const seasonRef = useRef()
    const btnCk = () => {
        //alert(`${seasonRef.current.value}을 좋아하는 ${nameRef.current.value}님 환영합니다!`)
        
        setUserData({
            'id' : idRef.current.value,
            'pw' : pwRef.current.value,
            'name' : nameRef.current.value,
            'season' : seasonRef.current.value
        })

        
    }

    useEffect(()=>{
        console.log('현재 data', userData)
        // 여기서 backend 로 값을 보내주면 됨
        // userData에 값이 비어있지 않은지 확인해주기
        // 보통 중복확인할때 이용하기도 함 (백 가서 중복확인)
        //userData.id !== undefined && alert(userData.id)
    },[userData])
  return (
    <div>
        ID : <input type="text" 
        placeholder='ID를 입력하시오'
        ref = {idRef}
        ></input>
        <button>아이디 중복확인</button>
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