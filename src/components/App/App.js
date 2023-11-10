import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "../Main/Main";
import Products from "../Products/Products";

function App() {

  const [lists, setLists] = useState([]);
  const [isCreateItemActive, setCreateItemActive] = useState(false);

  const isFirstRender = useRef(true);

  const onOpenItemCreation = () => {
    setCreateItemActive(true);
  };

  const onCloseItemCreation = () => {
    setCreateItemActive(false);
  };

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

  const createProductHandler = (listId, productName) => {
    const newProduct = { name: productName, status: 'not-checked' }

    const updatedLists = [...lists]
    updatedLists[listId] = { ...lists[listId], products: [...lists[listId].products, newProduct] }

    setLists(updatedLists)
  }

  const deleteProductHandler = (listId, productId) => {
    const updatedLists = [...lists]
    updatedLists[listId].products.splice(productId, 1)

    setLists(updatedLists)
  }


  const checkProductHandler = (listId, productId) => {

    const newProductStatus = lists[listId].products[productId].status === 'not-checked' ?
      'checked' :
      'not-checked'

    const updatedLists = [...lists]
    updatedLists[listId].products[productId].status = newProductStatus
    setLists(updatedLists)
  }

  const editProductHandler = (listId, productId, newVal) => {

    const updatedLists = [...lists]
    updatedLists[listId].products[productId].name = newVal
    setLists(updatedLists)
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
        <Routes>
          <Route
            exact
            path="/"
            element={<Main 
              onOpenItemCreation={onOpenItemCreation} 
              isCreateItemActive={isCreateItemActive} 
              onCloseItemCreation={onCloseItemCreation} 
              lists={lists} 
              createListHandler={createListHandler} 
              deleteListHandler={deleteListHandler} 
              />}
          />

          <Route
            path="/list/:id"
            element={<Products
              onOpenItemCreation={onOpenItemCreation} 
              isCreateItemActive={isCreateItemActive} 
              onCloseItemCreation={onCloseItemCreation} 
              lists={lists}
              createProductHandler={createProductHandler}
              deleteProductHandler={deleteProductHandler}
              checkProductHandler={checkProductHandler}
              editProductHandler={editProductHandler}
            />}
          />
        </Routes>

      </div>
    </div>
  );
}

export default App;
