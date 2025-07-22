import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header () {
  const navigate = useNavigate();
  
  // 쿼리 리액트 기본 설정 참고 용 <옛날 방법>
  // const 변수이름 =useQuery(['쿼리이름'],()=>{
  //   axios로 요청
  //   쿼리에 저장할 데이터 리턴
  // })

  // <요즘 방법>
  // const 변수이름2 = useQuery({
  //   queryKey: ['쿼리이름'],
  //   queryFn: ()=>{ 실행할 함수 코드
  //   //axios 요청
  //   // 쿼리 저장 데이터 리턴
  //   }
  // })



  const userInfoQuery = useQuery({
    queryKey : ['userInfo'],
    queryFn : async() => {
      const respones = await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')


      return respones.data;
    },
    staleTime : 5000, // 새로고침할 시간
    retry: 10 // 새로고침 횟수 지정
  })



  return(
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>navigate('/cart')}>장바구니</Nav.Link>
            <Nav.Link href="test">테스트</Nav.Link>
            <Link to="test">테스트2</Link>
          </Nav>
          <Nav style={{color : "yellow"}}>
            {userInfoQuery.isLoading && "회원정보 불러오는 중...."}
            {userInfoQuery.error && "회원 정보 불러오기 실패!"}
            {userInfoQuery.data && userInfoQuery.data[0].name}
          </Nav>


        </Container>
      </Navbar>
  )
}

export default Header;