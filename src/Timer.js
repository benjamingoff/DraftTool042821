import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Timer = (props) => {
  const [counter, setCount] = useState(27);

  const handleLockIn = () => {
    setCount(27);
    props.handler();
  };

  useInterval(() => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : setCount));
  }, 1000);

  return (
    <div className="Timer">
       Pick: {counter}
      <Button handleLockIn={handleLockIn} />
    </div>
  );
};
export default Timer;
