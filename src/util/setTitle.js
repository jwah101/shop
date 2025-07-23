//여러 페이지마다 타이틀 변경
export const setPageTitle = (title) =>{
  const titleElement = document.getElementsByTagName('title')[0];
  titleElement.innerText = title;
}