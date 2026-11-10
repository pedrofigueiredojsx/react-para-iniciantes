import { useState } from "react";

// useState = hooks

// sempre que vamos alterar o valor de algo => useState
// se e somente leitura => var, state

const UseStateComponent = () => {
  // variavel de consulta, e uma de alteracao, inicio o hook
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
    console.log(count);
  };

  const [user, setUser] = useState({
    name: "Ana",
    age: 25,
    hobbies: ["Leitura", "Programação"],
  });

  // sempre que vamos alterar o valor de algo => useState

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Voce clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>
        Nome: {user.name} e idade {user.age}
      </p>

      <button onClick={updateUserAge}>Incrementar idade</button>
    </div>
  );
};

export default UseStateComponent;
