import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";

function App() {
  const [lists, setLists] = useState([
    {
      name: "list1",
      products: [
        {
          name: "makaroshki",
          statuc: "not-checked",
        },
        {
          name: "kotletka",
          statuc: "not-checked",
        },
        {
          name: "esche chto to",
          statuc: "not-checked",
        },
      ],
    },
    {
      name: "list2",
      products: [
        {
          name: "makaroshki",
          statuc: "not-checked",
        },
        {
          name: "kotletka",
          statuc: "not-checked",
        },
        {
          name: "esche chto to",
          statuc: "not-checked",
        },
      ],
    },
    {
      name: "list3",
      products: [
        {
          name: "makaroshki",
          statuc: "not-checked",
        },
        {
          name: "kotletka",
          statuc: "not-checked",
        },
        {
          name: "esche chto to",
          statuc: "not-checked",
        },
      ],
    },
  ]);

  const createListHandler = (listName) => {
    const newList = { name: listName, products: [] };

    if (localStorage.getItem("lists")) {
      const listsArr = JSON.parse(localStorage.getItem('lists'));

      listsArr.push(newList);

      localStorage.setItem('lists', JSON.stringify(listsArr));

    } else {  
      localStorage.setItem('lists', JSON.stringify([newList]));
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main 
        lists={lists} 
        createListHandler={createListHandler}
        />} />
      </Routes>
    </div>
  );
}

export default App;
