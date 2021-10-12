import useHover from "./useHover";

function App() {
  const sayHello = () => {
    console.log("Hello!");
  };
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi!</h1>
    </div>
  );
}

export default App;
