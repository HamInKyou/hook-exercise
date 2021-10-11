import useInput from "./useInput";

function App() {
  const maxLen = (value) => {
    return value.length < 10;
  };
  const name = useInput("Mr.", maxLen);
  return (
    <>
      <input placeholder="name" {...name} />
    </>
  );
}

export default App;
