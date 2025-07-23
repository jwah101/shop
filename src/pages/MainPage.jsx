import bg from "../bg.jpg"
import { useState } from "react";
import Card from "../component/Card";

function MainPage({fruit}) {
  const [fruitCount , setFruitCount] = useState(3); // 처음 화면에 몇개 과일이 몇개 보일지 지정

  const visibleFruit = fruit.slice(0,fruitCount); // 0~2 이후엔 다 삭제



  return (
    <>
      <div className="main-bg" style={{backgroundImage:'url('+ bg +')', height:'300px'}}></div>
        <div className='container'>
         <div className="row">
            {
              visibleFruit.map((data, i)=>{
                return(
                  <Card data={data} key={i}/>
                )
              })
            }
          </div>
       </div>

    {
      fruitCount > fruit.length ? 
      <div className="alert alert-danger">더 이상 상품이 없습니다.</div>
      :
      <button onClick={()=>{
        setFruitCount(fruitCount+3);
      }}>3개 더보기</button>
    }
    </>
  )
  
}

export default MainPage;