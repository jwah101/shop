import { useNavigate } from "react-router-dom";

function Card ({data}) {
  const navigate = useNavigate();

  return(
    <div>
          <div className='col-md-4' onClick={()=>{
            navigate('/detail/'+ data.id )
          }}>
            {/* 기본 경로로 이미지 불러오기 */}
            <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${data.title}.jpg`} alt="" width='80%'/>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <p>{data.price}</p>
          </div>
  </div>
  )
}

export default Card;