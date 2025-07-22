import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeNum, nPlusNum, plusNum } from "../redux/store";
import { addCount, removeItem } from "../redux/cartslice";

function Cart () {

  // store.js에 설정한 redux 목록 가져오기
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch(); // 변경함수를 다른곳에서 사용할 수 있게 해주는 함수

  return (
    <Table>
      <thead>
        <tr>
          <th>상품번호</th>
          <th>상품명</th>
          <th>상품수량</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((data, i)=>{
            return(
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.count}</td>
                <td><button onClick={() =>{
                  dispatch(addCount(i));
                }}>+</button></td>
                <td><button onClick={()=>{
                  dispatch(removeItem(i))
                }}>삭제하기</button></td>
              </tr>
                  )
          })
        }

      </tbody>
    </Table>
  )
}

export default Cart;