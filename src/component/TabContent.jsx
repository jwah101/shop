import { useEffect, useState } from 'react';
import './TabContent.css'

function TabContent ({tabNumber}) {

  const [fade, setFade] = useState('');

  // state를 업데이트하는 작업은 비동기로 처리함.
  // state를 변경하는 함수를 호출하면 바로 반영하지 않고, 정보를 저장만 해놓는다.
  // 이후 한번에 모든 명렁어를 실행시키고 렌더링은 한번만 한다.
  // 이로인해 end를 떼어네는 명령어는 건너 뛰게 된다.
  useEffect(()=>{
    // setFade('');
    const timer = setTimeout(()=>{
      setFade('end');
      
    },100)

    return () => {
      clearTimeout(timer)
      setFade('');
    }
  },[tabNumber])

  return (
    <div className={`start ${fade}`}>
      {
        [<div>상세정보</div>, <div>리뷰</div>, <div>교환 및 반품정보</div>][tabNumber]
      }
    </div>

  )





  // if(tabNumber === 0){
  //   return <div>상세정보</div>
  // } else if(tabNumber === 1){
  //   return <div>상세리뷰</div>
  // } else if (tabNumber === 2){
  //   return <div>반품, 교환정보</div>
  // }
}

export default TabContent;