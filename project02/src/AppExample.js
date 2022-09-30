import React from 'react'
import Member from './Components/Member'


const AppExample = () => {

    // 팀원을 소개하는 페이지 만들기
    // 단, component와 props를 이용해서 만들것
    // 조건
    // 1) Member.js 라는 컴포넌트를 이용할 것
    // 2) 스타일은 객체 형태로 삽입할 것

    let team = "고연조"
  return (
    <div>
        
        <Member teamName= {team} name="고연주"></Member>
        <Member teamName= {team} name="임아해"></Member>
        <Member teamName= {team} name="주상민"></Member>
        <Member teamName= {team} name="마준호"></Member>
        
    </div>
  )
}

export default AppExample