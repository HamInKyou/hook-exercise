import useTitle from "./useTitle";

function App() {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 5000);
  return <div className="App"></div>;
}

export default App;
