import React from 'react'
import PhotoCard from './Ex05Com/PhotoCard'

const Ex05 = () => {

    let divStyle = {
        display : 'flex'
    }

    // 조건1 ) Ex05Com 폴더 => PhotoCard.js 컴포넌트 사용
    // 조건2 ) member라는 배열 안에 name과 url 주소가포함된
    //          객체들을 생성할 것
    // 조건3) 만약 배열에 값을 추가하면 바로 새로운 카드들이 생기게할것

    let pCard = [{
        pName: "다니엘",
        url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ExsONCIIGwrL6d9dw1-I-NXfdexfjv4m3w&usqp=CAU"
    }, {
        pName: "해린",
        url :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVkar-MLaWyyxGqINTMu7afJrhyY1B2ReRg&usqp=CAU"
    }, {
        pName: "민지",
        url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiRwL3HKdkYt1hygSjnrt6MI1E18MkrRa_w&usqp=CAU"
    }
]


    let renderPCard = pCard.map(item => (<PhotoCard key={item.pName} item={item}></PhotoCard>))


  return (
    <div style={divStyle}>
        
        {renderPCard}
    </div>
  )
}

export default Ex05