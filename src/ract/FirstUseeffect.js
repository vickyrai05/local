import { React,useState, useEffect } from "react";


function  FirstUseeffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 3); 
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
export default FirstUseeffect;