import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TabContent from "../component/TabContent";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartslice";

function Detail ({fruit}) {

  //주소창에 추가 된 밸류값을 찾아내준다. 그 값을 {}안에 담아둘수 있음
  const {id} = useParams();
  const[num , setNum] = useState(0);
  const[num2 , setNum2] = useState(0);
  const [alert, setAlert] = useState(true);
  const [tabNumber, setTabNumber] = useState(0);
  const dispatch = useDispatch();


  //상품 번호가 없는 곳에 들어갔을 때 id배열로 가져와서 true false확인 후 없으면 존재 x 표시
  const selectedFruit = fruit[id];

  // 컴포넌트가 실행될 때 같이 실행하는 코드
  // use effect는 html이 전부 다 렌더링 완료된 후 실행이 된다. 
  useEffect(() => {
    // 여기에 작성된 모든 코드들은 마운트, 업데이트 될 때 실행

    // 타이머 설정 함수
    let timer = setTimeout(() => {
        setAlert(false);
      }, 5000);

        return() => {
          console.log('clean-fn')
          clearTimeout(timer); // 클리어 타임을 사용하려면 변수에 담아서 사용해야함
        }
      },[])

  // 의존성 배열에 빈 배열을 넣으면 마운트시 한번만 실행되 된다.
  // 의존성 배열 useeffcet 에 추가적으로 넣을 수 있다.
  // 변경 감지된 state, props 설정하는 거에 따라 실행 여부가 결정


  // 의존성 배열이 없으면 계속 실행, 배열을 추가하고 배열을 비워 놓으면 딱 한번 실행, 해당 배열에 특정 state가 있으면
  // 해당 state가 실행 될때 실행 된다.
  // useEffect(()=> {
  //   console.log('useEffect 확인용 콘솔')
  // }, [num])




  if(!selectedFruit) {
    return <div>해당 상품이 존재하지 않습니다.</div>
  }

  return(
    <div className="container mt-3">

      <button onClick={()=>{
        setNum(num+1);
      }}>버튼<span>{num}</span></button>

      <button onClick={()=>{
        setNum2(num2+1);
      }}>버튼2<span>{num2}</span></button>


      {
        alert ? 
        <div className="alert alert-danger">
          5초안에 구매하면 무료
        </div>
        : ""
      }

      <div className="row">
        <div className="col-md-6">
          <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`}  width='80%' alt="" />
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger" onClick={()=>{
            const item = { // 버튼 누를 시 item 배열을 만들어주는 것
              id: id,
              title: fruit[id].title,
              count:1
            }
            dispatch(addItem(item)); // cartslice에 additem 만든 것 디스패치로 호출
            window.alert('장바구니에 담았습니다.')// 모달 창이 작동 안될때 앞에 window.붙이기
          }}>주문하기</button>
        </div>
      </div>


      <Nav className="mt-5" variant = "tabs" justify>
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{
            setTabNumber(0);
          }}>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{
            setTabNumber(1);
          }}>리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{
            setTabNumber(2);
          }}>반품, 교환정보</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabNumber={tabNumber}/>
  
    </div>
  )
}

export default Detail;