import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "./Counter";
import { increase, decrease, setDiff } from "../../modules/counter";

function CounterContainer() {
  //useSelector 최적화
  //아래 코드는 useSelector로 state를 조회 후 새로운 객체를 만들기 때문에 계속 렌더링을 함.
  //   const { number, diff } = useSelector(state => ({
  //     number: state.counter.number,
  //     diff: state.counter.diff
  //   }));

  //최적화 방법 두가지
  //첫번째 아래 코드와 같이 여러번 사용하여 가져오는것.
  //   const number = useSelector(state => state.counter.number);
  //   const diff = useSelector(state => state.counter.diff);

  //두번째 아래 코드와 같이 shallowEqual함수를 useSelector의 두번째 인자로 전달
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}
export default CounterContainer;
