import React from 'react'

const PhotoCard = (props) =>{
        console.log(props.item)

    let divStyle = {
        margin: '20px',
       
    }  
    
    
    return(
        <div style={divStyle}>
            <h1>{props.item.pName}</h1>
            <img width="230px" height="300px" src = {props.item.url}></img>    
            <button onclick="" class="w-btn w-btn-green">♥</button>
        </div>
       
    )

}
export default PhotoCard