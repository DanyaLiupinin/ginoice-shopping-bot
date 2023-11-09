import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "../Main/Main";

function App() {

  const [lists, setLists] = useState([]);
  const isFirstRender = useRef(true);

  const createListHandler = (listName) => {
    const newList = { name: listName, products: [] };
    if (lists.length > 0) {
      setLists([...lists, newList]);
    } else {
      setLists([newList]);
    }
  };

  const deleteListHandler = (key) => {
    console.log(key)
    const newListsArr = [];
    for (let i = 0; i < lists.length; i++) {
      if (!(i === key)) {
        newListsArr.push(lists[i])
      } 
    }
    setLists(newListsArr)
  }

  useEffect(() => {
    if (localStorage.getItem("lists")) {
      const lists = JSON.parse(localStorage.getItem("lists"));
      console.log(lists);
      setLists(lists);
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      localStorage.setItem("lists", JSON.stringify(lists));
    } else {
      isFirstRender.current = false;
    }
  }, [lists]);

  return (
    <div className="App">
      <div className="content">
          {/*<Routes>
      
        <Route
        exact
          path="/"
          element={<Main lists={lists} createListHandler={createListHandler} deleteListHandler={deleteListHandler}/>}
        />
      </Routes> */}
      
      <Main lists={lists} createListHandler={createListHandler} deleteListHandler={deleteListHandler}/>
      </div>
    </div>
  );
}

export default App;
