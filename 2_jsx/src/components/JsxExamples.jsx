import React, { useSyncExternalStore } from "react";

const JsxExamples = () => {
  const userName = "Carlos";

  const user = {
    name: "Ana",
    lastName: "Souza",
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  const userIsloggedIn = false;

  const userRole = "admin";

  const users = [
    { id: 1, name: "Joao" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Maria" },
  ];

  return (
    <div>
      {/* Basico */}
      <h2>Conteudo que o usuario vai ver</h2>
      {/* Listando dados do usuario */}
      <p>O nome do usario e: {userName}</p>

      <p>
        Usuario: {user.name} {user.lastName}
      </p>

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Pedro")}</p>

      {/* diferencas do html */}
      <div className="alguma-coisa">Este cara</div>

      <div className="teste">ok</div>

      <button onClick={() => alert("Teste")}>Clique em mim</button>

      <input type="text" placeholder="Digite algo" />

      {/* renderizacao condicional */}
      {userIsloggedIn ? (
        <div>
          <p>Caso: esta logado</p>
        </div>
      ) : (
        <div>
          <p>Caso: nao esta logado</p>
        </div>
      )}

      <p>{userRole === "admin" && "voce e um admin"}</p>

      {/* renderizacao de listas */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsxExamples;
