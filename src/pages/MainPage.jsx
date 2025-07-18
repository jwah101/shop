import Card from "../component/card"
import bg from "../bg.jpg"

function MainPage({fruit}) {

  return (
    <>
      <div className="main-bg" style={{backgroundImage:'url('+ bg +')'}}></div>
      <div className='container'>
         <div className='row'>
            {
              fruit.map((data, i)=>{
                return(
                  <Card data={data} key={i}/>
                )
              })
            }
          </div>
       </div>
    
    </>
  )
  
}

export default MainPage;