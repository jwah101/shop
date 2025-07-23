import './WatchedProduct.css'
import bg from '../bg.jpg'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function WatchedProduct ({fruit}) {
  // 로컬스토리지가 변경 되어도 리액트는 렌더링이 안됨
  // 결국 state를 만들어서 별도로 관리하여 반영해야함

  const watched = useSelector(state => state.watched);
  const navigate = useNavigate();
  function clickHandler(id){ // id를 매개변수로 가져와서 밑에 페이지에 추가
    navigate(`/detail/${id}`);
  }
    // 현재 App컴포넌트에서 data를 가져오는 과정에서 useEffect가 렌더링 후순위가 되어서
    // 이걸 적용 하여 리턴으로 재 렌더링 하므로 useEffect가 정상 작동 된다.
    if (fruit.length === 0) {
    return <div>데이터 로딩 중...</div>;
  }
  
  return (
    <div className="WatchedProduct">
      <div className="cards">
        <p>최근 본 상품</p>
        {
          watched.map((id,i)=>{
            return(
             <div className="card" key={i} onClick={() => clickHandler(id)}> 
               <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`} width='100%' alt="" /> 
               <p>{fruit[id].title}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WatchedProduct;