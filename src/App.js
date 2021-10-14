import useFullscreen from "./useFullscreen";

function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { ref, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div className="App">
      <div ref={ref} style={{ backgroundColor: "#121212" }}>
        <img
          src="https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
          alt="fullScreenTest"
          style={{ width: "400px" }}
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
