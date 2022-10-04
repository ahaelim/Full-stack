import React,{useState} from 'react'
import AddComment from './Ex06Com/AddComment'
import CommentList from './Ex06Com/CommentList'
// 1. input 창에 댓글을 입력하고,
//      + 누르면, 댓글 목록에 댓글 추가!

// 2. 이때, 현재 시각과 같이 출력
//  ex) 안녕하세요 - 오후 4:57:37

// 'concat' 기능
// 배열 A, 배열 B
// let 배열C = 배열A.concat(배열B)

// 3. 엔터를 쳐도 똑같이 댓글이 등록되도록 하기

// ** 이벤트
//      => onClick={함수이름} : 클릭했을 때
    //      => onChange={함수이름} : 변화가 있을 때
    //      => onKeyPress={함수이름} : 키보드 누를 때
    
    // input창에 변화 감지 => 댓글 등록 버튼 input값 저장
    // => map함수로 목록에 뿌려줄 것
    
    // ** 실시간 시간
    // new Data().toLocaleTimeString()
    const Ex06 = () => {

      const [com, setCom] = useState([])

      // 하위 컴포넌트 -> 상위 컴포넌트로 값을 바로 전달 불가능
      // (1) 상위컴포넌트 내에 함수 생성
      // (2) 그 함수를 props를 통해 하위 컴포넌트에 전달
      // (3) 하위 컴포넌트에서 함수 호출
      // (4) 값은? 매개변수 안에다가
      const handleComment = (newCom) =>{
        console.log('handleComment',newCom)
        let curTime= new Date().toLocaleTimeString()
        // concat : 배열 + 배열
        // com 배열과 괄호 안의 배열이 합해지게됨
        setCom(com.concat({text : newCom, time : curTime}))
      }

    return (
      <div>
        <h1>Leave Your Comment!!</h1>
        <AddComment handleComment={handleComment}/>
        <CommentList com={com}/>
    </div>
  )
}

export default Ex06