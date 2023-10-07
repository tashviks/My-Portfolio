import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Taskbar from "./components/Taskbar";

function App() {
  return (
  
    <div className="App">
      <Main></Main>
      <Taskbar/>
    </div>
  );
}

export default App;
