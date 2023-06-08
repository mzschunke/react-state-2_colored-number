import ColoredNumber from "./ColoredNumber";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // State eingefügt
  useEffect(() => {
    console.log("Count is:", count);
  }),
    [count];
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
