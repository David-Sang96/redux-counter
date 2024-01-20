import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((store) => store.counter.counter);
  const isShow = useSelector((store) => store.counter.isShow);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const increaseBy5Handler = () => {
    dispatch(counterActions.increaseBy5(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <div className="border py-4 shadow-md md:w-1/2 md:mx-auto mt-5 text-center space-y-5">
      <h2 className="text-3xl font-serif">Counter</h2>
      {isShow && <div className="text-2xl font-bold">{counter}</div>}
      <div className="flex space-x-3 justify-center ">
        <button
          className="text-sm px-1 border-2 border-red-600  py-1 rounded-lg md:text-lg"
          onClick={increaseHandler}
        >
          increase
        </button>
        <button
          className="text-sm px-2 border-2 md:text-lg border-red-600  py-1 rounded-lg"
          onClick={increaseBy5Handler}
        >
          increaseBy5
        </button>
        <button
          className="text-sm px-2 border-2 md:text-lg border-red-600  py-1 rounded-lg"
          onClick={decreaseHandler}
        >
          decrease
        </button>
        <button
          className="text-sm px-2 border-2 md:text-lg border-red-600  py-1 rounded-lg"
          onClick={toggleHandler}
        >
          toggle
        </button>
      </div>
    </div>
  );
};

export default Counter;
