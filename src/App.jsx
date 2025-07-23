import style from './App.module.css'
import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Header from './component/Header';
// import Detail from './pages/Detail'; 3개는 첫 로딩때 안보이는 페이지
// import About from './pages/About';
// import Cart from './pages/Cart';
import styled from 'styled-components';
import axios from 'axios';
import WatchedProduct from './component/WatchedProuct';
import { useDispatch } from 'react-redux';
import { setWatched } from './redux/watchedslice';
import Test from './pages/Test';
import { setPageTitle } from './util/setTitle';

// 첫페이지 방문시 Detail 페이지와 Cart페이지는 안보이는 상태
// 그래서 위에 페이지들까지도 처음부터 불러올 필요가 있을까? 라는 의문에서 시작
// 그래서 위에 페이지들이 실행이 될때 받아오는 걸로 지연 로딩시키는 방법
// lazy import 사용법

const Detail = lazy(()=> import('./pages/Detail'));
const About = lazy(()=> import('./pages/About'));
const Cart = lazy(()=> import('./pages/Cart'));



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
  const dispatch = useDispatch();


  // useeffect는 html이 모두 실행 후 렌더링이 된다. 결국 후순위로 배치
  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
      .then(response =>{
        setFruit([...response.data])// 새로운 정보로 다시 받아오는 것
      })
      .catch(error=>{
        console.log('error');
      })
  },[])

  // 최근본 상품 만들기
  // 로컬스토리지를 기본적으로 비어있게 설정해 놓음 그래서 디테일에서 새로고침 하면 오류
  useEffect(()=>{ 

    let watched = localStorage.getItem('watched');
    watched = JSON.parse(watched);
    // watched가 null 값이면 빈배열 else  우리가 본 걸로 채워주기
    if(watched === null) {
      localStorage.setItem('watched', JSON.stringify([])); // watched key , value
      dispatch(setWatched([]))
    } else {
      dispatch(setWatched(watched));
    }


  },[])

  // 타이틀 변경 함수
  useEffect(()=>{
    setPageTitle('index');
  })





  return (
    // 같은 이름으로 클래스네임으로 지정해주고, 하위 요소들을 나중에 별도 지정하려면 .App > .?? 이런식으로 적용해주자 
    <div className={style.container}>
      {/* <Div>
        <Btn bg='pink'>버튼</Btn>
        <Btn bg='blue'>버튼</Btn>
        <Btn2 bg='orange'>버튼</Btn2>
      </Div> */}
      <WatchedProduct fruit={fruit}/>
      <Header />
      
      {/* lazy import 사용시 서스펜스로 묶어줘야한다. */}
      <Suspense fallback={<div>페이지 로딩중....</div>}>
        <Routes>
          {/* /:?? -> 변수를 지정해주는 것이다. 단순 링크 주소가 아니다. */}
          <Route path='/' element={<MainPage fruit={fruit} />}/>
          <Route path='/detail/:id' element={<Detail fruit={fruit}/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='test' element={<Test />}/>

          <Route path='/about' element={<About />}>
            <Route path='intro' element={<div>회사소개</div>} />
            <Route path='history' element={<div>회사 연혁</div>} />
            <Route path='loc' element={<div>오시는 길</div>} />
          </Route>

          {/* 없는 페이지 에는 *를 넣어서 표시  보통 맨 밑에 배정*/}
          <Route path='*' element={<h1>존재하지 않는 페이지</h1>}/> 
        </Routes>
      </Suspense>

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
