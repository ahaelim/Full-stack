import React from 'react'
import {useState} from 'react'
import minzyPic from './img/minzy.jpg'

const Ex02 = () => {

    // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
    //     '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요' 로 변경
    // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉찬 하트로 변경
    //     '좋아요 취소' 버튼 클릭 시, 꽉찬 하트가 비어있는 하트로 변경
    const [likeb, setLikeb] = useState("좋아요")
    const [heart, setHeart] = useState("♡")
    const [liken, setLiken] = useState(0)
    const like = () =>{
        likeb == '좋아요' 
        ? setLikeb('좋아요 취소') 
        : setLikeb('좋아요')

        heart == '♡'
        ? setHeart('♥')
        : setHeart('♡')
        // if(likeb==="좋아요"){
        //     setLikeb("좋아요 취소")
        //     setHeart("♥")
        // }else{
        //     setLikeb("좋아요")
        //     setHeart("♡")
        // }
    }

    // 3. '+1' 버튼 클릭 시, 숫자가 1씩 증가
    const likeUp = () =>{
        setLiken(liken+1)
    }

    // 4. '-1' 버튼 클릭 시, 숫자가 1씩 감소
    //      (단, 0 밑으로는 내려가지 않도록!)
    const likeDown = () =>{
        liken>0 && setLiken(liken-1)

        // if(liken>0){
        // setLiken(liken-1)
        // }
    }
    
    
  return (
    <div>
        {/* 이미지, 좋아요버튼, +1버튼 , -1버튼 */}
        <img 
        src= {minzyPic}
        width="300px">
        </img>
        <h3>{heart} {liken}</h3>
        <br/>
        <button class="w-btn w-btn-green" onClick={like}>{likeb}</button>
        <button class="w-btn w-btn-indigo" onClick={likeUp}>+1</button>
        <button class="w-btn w-btn-indigo" onClick={likeDown}>-1</button>
    </div>
  )
}

export default Ex02