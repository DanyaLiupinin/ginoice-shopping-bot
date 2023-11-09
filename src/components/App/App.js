import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Main from '../Main/Main';

function App() {

  const [lists, setLists] = useState([
    {name: 'list1',
      products: ['product1', 'product2', 'product3']
    },
    {name: 'list2',
      products: ['product1', 'product2', 'product3']
    },
    {name: 'list3',
      products: ['product1', 'product2', 'product3']
    }
  ])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main
          lists={lists}
        />} />
      </Routes>
    </div>
  );
}

export default App;
