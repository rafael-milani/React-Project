import { useState } from "react";
const App2 = () => {
  const [count, SetCount] = useState(0);

  const incrementCount = () => {
    SetCount((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>Contador</h1>

      <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Contar</button>
      </div>
    </>
  );
};
export default App2;
