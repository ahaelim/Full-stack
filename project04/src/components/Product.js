import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
    const goToMain = () =>{
        navigate('/')
    }
  return (
    <div>
        <p>1번째 상품 페이지입니다.</p>
        <button onClick={goToMain}>메인으로 돌아가기</button>
    </div>
  )
}

export default Product