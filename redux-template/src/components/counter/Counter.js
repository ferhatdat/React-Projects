import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../../redux/actions/counterActions";
import "./Counter.css";

const Counter = () => {
  const {counter} = useSelector(state => state.counterReducer)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1
        className={
          counter > 0
            ? "counter-pos"
            : counter < 0
            ? "counter-neg"
            : "counter-zero"
        }
      >
        {counter}
      </h1>
      <div>
        <button className="counter-button positive" onClick={()=>dispatch(increase())}>incease</button>
        <button className="counter-button zero" onClick={()=>dispatch(reset())}>reset</button>
        <button className="counter-button negative" onClick={()=>dispatch(decrease())}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
