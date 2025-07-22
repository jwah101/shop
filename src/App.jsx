import style from './App.module.css'
import data from './mokData';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Header from './component/Header';
import Detail from './pages/Detail';
import About from './pages/About';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './pages/Cart';


// style 라이브러리 사용법 : npm install styled-components사용하여 설치후 밑에 처럼 설정
// const 컴포넌트 이름 지정 = styled.태그명 `css 속성`
// props.bg 지정해주면 bg라는 변수안에 담는것
const Btn = styled.button `
 background : ${props => props.bg}; 
 font-size : 30px;
 border: 1px soild red;
 color : ${props => props.bg === 'blue' ? 'white':'black'}
`

//위에 버튼 기능을 기본으로 사용하고 추가적으로 사용하고 싶을 때 
const Btn2 = styled(Btn) `
  width : 200px;
  height : 200px;
`

const Div = styled.div`
  padding : 20px;
  background : skyblue;
`

function App() {
  const [fruit, setFruit] = useState([]); // 새로운 배열을 넣기 위해 빈배열로

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
      .then(response =>{
        setFruit([...response.data])// 새로운 정보로 다시 받아오는 것
      })
      .catch(error=>{
        console.log('error');
      })
  },[])


  return (
    // 같은 이름으로 클래스네임으로 지정해주고, 하위 요소들을 나중에 별도 지정하려면 .App > .?? 이런식으로 적용해주자 
    <div className={style.container}>
      {/* <Div>
        <Btn bg='pink'>버튼</Btn>
        <Btn bg='blue'>버튼</Btn>
        <Btn2 bg='orange'>버튼</Btn2>
      </Div> */}
      <Header />
      
      <Routes>
        {/* /:?? -> 변수를 지정해주는 것이다. 단순 링크 주소가 아니다. */}
        <Route path='/' element={<MainPage fruit={fruit} />}/>
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='test' element={<h1>테스트페이지</h1>} />
        <Route path='/about' element={<About />}>
          <Route path='intro' element={<div>회사소개</div>} />
          <Route path='history' element={<div>회사 연혁</div>} />
          <Route path='loc' element={<div>오시는 길</div>} />
        </Route>

        {/* 없는 페이지 에는 *를 넣어서 표시  보통 맨 밑에 배정*/}
        <Route path='*' element={<h1>존재하지 않는 페이지</h1>}/> 
      </Routes>


        <button onClick={()=>{
          axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json')
            .then((response=>{
             setFruit([...fruit, ...response.data]) // 서로 두 배열을 합쳐주는 것
            }))
            .catch((error)=>{
              console.log(error);
            })
        }}>더보기</button>




        {/* axios.메서드('요청 주소') -> ( post, get 등등)
          .then((response)=>{
          응답 받은 후 처리할 코드
          })
          .catch((error)=>{
          요청 실패후 처리할 코드
          }) */}
      <button onClick={()=>{
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
          .then((response)=>{
            console.log(response.data);

          })
          .catch((error) =>{
            console.log(error);
          })
      }}>과일정보 받아오기</button>
     </div>
     
  )
}

export default App;
