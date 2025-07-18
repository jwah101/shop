import { useParams } from "react-router-dom";

function Detail ({fruit}) {

  //주소창에 추가 된 밸류값을 찾아내준다. 그 값을 {}안에 담아둘수 있음
  const {id} = useParams();


  return(
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <img src={`${import.meta.env.BASE_URL}img/${fruit[id].title}.jpg`} alt="" />
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;