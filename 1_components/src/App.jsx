import "./App.css";

// importar o componente filho
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

// componente pai
function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* utilizando o componente importado no jsx */}
      <FunctionalComponent />
      <PropsExample nome="Pedro" idade={28} />
    </>
  );
}

export default App;
