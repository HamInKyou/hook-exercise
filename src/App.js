import useBeforeLeave from "./useBeforeLeave";

function App() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return <div className="App">Hello</div>;
}

export default App;
