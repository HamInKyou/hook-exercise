import useAxios from "./useAxios";

function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json",
  });
  return (
    <div className="App">
      <button onClick={refetch}>Refecth</button>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "Done"}</h2>
      <p>{error && "error"}</p>
    </div>
  );
}

export default App;
