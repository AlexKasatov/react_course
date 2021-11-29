import { useState } from "react";

function NewButton(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={() => handlePlusClick(item)}>+</button>
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
}

export default function Counter() {
  const [count, setCount] = useState(0);

  function handlePlusClick(item) {
    if (count < 5) {
      setCount((prev) => prev + 1);
    }
  }
  function handleMinusClick() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  return <NewButton count={count}></NewButton>;
}
