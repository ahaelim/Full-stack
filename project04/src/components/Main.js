
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate()
    const [userState,setUserState]=useState(false)

    const goToMyPage = () =>{
        // login 상태면 mypage로 이동, 그렇지 않으면 about으로 이동
        userState == true
             ? navigate('/mypage')
             : navigate('/about')
    }
     
  return (
    <div>Main
        <br></br>
        {/* Link Component
        - 브라우저 주소를 바꿔주는 역할
        - 실제로 페이지를 불러오지는 않는다(a태그와의 차이)
        */}
        <Link to='./About'>About으로 이동</Link><br/>
        <Link to='./Product50'>상품페이지로 이동</Link><br/>
        <button onClick={goToMyPage}>마이페이지로 이동</button>
        {/*  */}
    </div>
  )
}

export default Main