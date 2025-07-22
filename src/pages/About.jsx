import { Outlet } from "react-router-dom";

function About () {
  return(
    <>
    <button>회사 소개</button>
    <button>회사 연혁</button>
    <button>오시는 길</button>
    <Outlet />
    </>
  )

}

export default About;