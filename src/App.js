import useClick from "./useClick";

function App() {
  const sayHello = () => {
    console.log("Hello!");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi!</h1>
    </div>
  );
}

export default App;
