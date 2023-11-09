import "./App.css";

import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";

function App() {
  const tg = window.Telegram.WebApp;
  tg.expand(); 


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
