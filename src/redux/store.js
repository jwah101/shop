import { configureStore, createSlice } from "@reduxjs/toolkit";

const test = createSlice({
  name : 'test', // 변수이름과 똑같이 하는 것이 일반적,
  initialState : 'hello'
});


const item = createSlice({
  name : 'item',
  initialState: ['apple', 'banana']
})


export default configureStore({
  reducer:{
    test: test.reducer,
    item: item.reducer
  }
})