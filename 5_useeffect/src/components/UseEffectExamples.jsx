import { useState, useEffect } from "react";

const UseEffectExamples = () => {
  // sem dependencias
  useEffect(() => {
    console.log("Rodou UE1");
  });

  // com dependencias vazias / array dep. vazio
  useEffect(() => {
    console.log("Rodou UE2");
  }, []);

  // usestate ativa a re-renderizacao
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // com dependencias
  useEffect(() => {
    console.log("Rodou UE3");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
      <button onClick={() => setCount2(count2 + 1)}>Aumentar contagem 2</button>
    </div>
  );
};

export default UseEffectExamples;
