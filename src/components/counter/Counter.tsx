import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {counterActionIncrement, counterActionDecrement} from '../../actions/counter/counter.actions';
import { IRootReducerInterface } from '../../interfaces/root.interface';


const Counter: React.FC = () => {
  const count = useSelector(({counter}: IRootReducerInterface) => {
    return counter.count
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => dispatch(counterActionIncrement(count))}>+</button>
      <button onClick={() => dispatch(counterActionDecrement(count))}>-</button>
    </div>
  );
}

export default Counter;