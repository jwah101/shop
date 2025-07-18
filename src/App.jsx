import './App.css'
import data from './mokData';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Header from './component/Header';
import Detail from './pages/Detail';

function App() {
  const [fruit, setFruit] = useState(data);



  return (
    <div>
      <Header />
      
      <Routes>
        {/* /:?? -> 변수를 지정해주는 것이다. 단순 링크 주소가 아니다. */}
        <Route path='/' element={<MainPage fruit={fruit} />}/>
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>}/>
        <Route path='test' element={<h1>테스트페이지</h1>} />
      </Routes>
     </div>
  )
}

export default App;
