import { memo, useState, useTransition } from "react";

//함수식
function Child ({num}) {
  return (
    <>
      <h1>첫번째 자식 컴포넌트</h1>
      <p>증가된 num 보여주기 : {num+10}</p>
    
    </>

  )
}

//표현식
//메모 함수로 인해 렌더링 막아둠
const Child2 = memo(() => {
  return (
    <>
      <h1>두번째 자식 컴포넌트</h1>
      <p>num이랑 관련없는 컴포넌트</p>
    </>

  )
})


function Test () {
  const [num, setNum] = useState(0);
  const [data, SetData] = useState('');
  // 스테이트와 유사하게 2가지 리턴 / 특정 부분을  렌더링 지연시켜주는 함수
  const [isPending, startTransition] = useTransition();


  // Array(10000)은 10000개의 배열 공간을 생성. fill은 그 공간에 0을 채움
  const a = new Array(10000).fill(0);

  return (
    <>
    <input type="text"  onChange={(e)=>{
      startTransition(()=>{
        
        SetData(e.target.value);
      })
      
    }}/>

    {
      isPending ?
      <div>처리중....</div>
      :
      a.map(() =>{
        return <div>{data}</div>
      })
    }


    {num} <button onClick={()=>{setNum(num+1)}}>+</button>
    <Child num={num}/>
    <Child2/>
    </>
  )
}

export default Test;