function Card ({data}) {

  return(
    <div>
          <div className='col-md-4'>
            {/* 기본 경로로 이미지 불러오기 */}
            <img src={`${import.meta.env.BASE_URL}img/${data.title}.jpg`} alt="" />
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <p>{data.price}</p>
          </div>
  </div>
  )
}

export default Card;