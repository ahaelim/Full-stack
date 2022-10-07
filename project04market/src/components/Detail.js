import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {

    // useParams() => 파라미터
    // Route path 값을 수정
    let {num} = useParams()

    // useSearchParams() => 쿼리
    // url 값을 수정
    const [query, setQuery] = useSearchParams()

    // 장소까지 추가로 가져와서
    // h2 => 타이틀, p => 가격, 장소
    const title = query.get('title')
    const price=  query.get('price')
    const place = query.get('place')

  return (
    <div>
      {num}번째 게시물
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{place}</p>
    </div>
  )
}

export default Detail