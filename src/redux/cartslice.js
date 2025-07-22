import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice ({
  name: 'cart',
  initialState:[
    {id:0, title: 'apple', count: 3},
    {id:2, title: 'watermelon', count: 5},
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      // 판단 기준 정하기, id로 판단하여 장바구니에 이미 있는지 없는지 판단
      // findIndex 함수 : 조건식에 만족하는 인덱스를 리턴해주는 함수, 없으면 -1 리턴
      let index = state. findIndex(data =>{
        return data.id == action.payload.id
      })
      if(index!==-1){
        state[index].count++;
      } else {
        state.push(action.payload) // push는 배열방에 추가해주는 함수
      }
    },
    removeItem(state, action) {
      state.splice(action.payload, 1)
    }
  }
});



export default cart;

export const{addCount, addItem, removeItem} = cart.actions;