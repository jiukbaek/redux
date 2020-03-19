import { createStore } from "redux";

//관리 할 상태
const initialState = {
  counter: 0,
  text: "",
  list: []
};

// 액션 타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 생성 함수 정의
const increase = () => ({
  type: INCREASE
});
const decrease = () => ({
  type: DECREASE
});
const changeText = text => ({
  type: CHANGE_TEXT,
  text
});
const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

//리듀서 새로운 상태를 만드는 함수.
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
