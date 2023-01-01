import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../redux/actions/counterAction";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(incrementCounter());
  };
  const handleRes = () => {
    dispatch(resetCounter());
  };
  const handleDec = () => {
    dispatch(decrementCounter());
  };
  return (
    <div>
      <h2> This a Counter App</h2>
      <h3>Count: {count}</h3>

      <Button onClick={handleInc} variant="success">
        Increment
      </Button>
      <Button onClick={handleRes} variant="light">
        rese
      </Button>
      <Button onClick={handleDec} variant="light">
        decrement
      </Button>
    </div>
  );
};
