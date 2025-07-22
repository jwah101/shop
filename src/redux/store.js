import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartslice";

const test = createSlice({
  name : 'test', // 변수이름과 똑같이 하는 것이 일반적,
  initialState : 'hello'
});


const item = createSlice({
  name : 'item',
  initialState: ['apple', 'banana']
})


// redux사용하기위한 createSlice 사용
const num = createSlice ({
  name: 'num',
  initialState: 1,
  reducers: { // 오브젝트로 여러개 만들 수 있다. 뒤에 ,를 찍어서;
  //  변경함수 지정 changeNum 변경함수
    changeNum() {
      return 10;
    },
    plusNum(state){ // 초기 값을 가져오기위해 state라고 매개변수에 넣어준다.
      return state+1;
    },
    nPlusNum(state, action){ // 초기값, 액션으로 매개변수를 받아준다. 액션은 cart에 매개변수가 있음 3이라는 그게 들어감
      console.log(action);
      return state+action.payload // 페이로드에 3이 담김
    }
  }
});




const obj = createSlice({
  name: 'obj',
  initialState: {name : 'Hong', age: 20}, // 초기값이 오브젝트일 경우
  reducers: {
    changeAge(state, action){
      state.age  = action.payload// 나이 오브젝트 불러오기, payload값으로 변경하기
      // rerutn은 왜 여기에서 안 쓸까?
    }
  }
})



// 변경함수는 이렇게 export 해줘야 한다.
export const {changeNum, plusNum, nPlusNum} = num.actions;
export const{changeAge} = obj.actions;


export default configureStore({
  reducer:{
    test: test.reducer,
    item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,
  }
})