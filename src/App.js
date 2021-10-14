import useNotification from "./useNotification";

function App() {
  const triggerNotification = useNotification("Hello!", {
    body: "Hello friends!",
  });
  return (
    <div className="App">
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
}

export default App;
