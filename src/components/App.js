import React from 'react';
import {  } from 'antd';
import './App.css';

import AddTodo from './addtodo/addtodo';
import ShowTodos from './showtodos/showtodos';

function App() {
  return (
    <div className="App">
      <div className="container">
        <AddTodo />
        <ShowTodos />
      </div>
    </div>
  );
}

export default App;
