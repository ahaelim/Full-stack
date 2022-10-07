import React from 'react'
import App from '../App'
import { useState } from 'react'
const NewsItem = ({news}) => {
const boxStyle ={
    border : '1px solid gray',
      display : 'flex',
      flexDirection : 'row',
}
  return (
    <div style={boxStyle}>
        <img src={news.urlToImage} width="200px"></img>
        <div>
        <a href={news.url}><h2>{news.title}</h2></a>
        <p>{news.description}</p>
        </div>
    </div>
  )
}

export default NewsItem