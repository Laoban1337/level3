import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <div>
        <Header />
        <Meme/>
        <h1>TEST</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
