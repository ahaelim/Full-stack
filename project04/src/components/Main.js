import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>Main
        <br></br>
        {/* Link Component
        - 브라우저 주소를 바꿔주는 역할
        - 실제로 페이지를 불러오지는 않는다(a태그와의 차이)
        */}
        <Link to='./About'>About으로 이동</Link>
    </div>
  )
}

export default Main