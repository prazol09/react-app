// import { useReducer } from 'react';
// // import { useState, createContext, useContext } from 'react';

// const initialTodos = [
//   {
//     id: 1,
//     title: 'Todo 1',
//     desc: 'start working on proposal draft two',
//     complete: false,
//   },
//   {
//     id: 2,
//     title: 'Todo 2',
//     desc: 'indepth research of five methodologies for FYP',
//     complete: false,
//   },
//   {
//     id: 3,
//     title: 'Todo 3',
//     desc: 'start development on FYP',
//     complete: false,
//   },
//   {
//     id: 4,
//     title: 'Todo 4',
//     desc: 'submit popopsaal draft two',
//     complete: false,
//   },
// ];

// const reducer = (state) => {
//   return state.map((todo) => {
//     return todo;
//   });
// };

// function App() {
//   const [todos] = useReducer(reducer, initialTodos);

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <h1>{`${todo.title} ${todo.desc}`}</h1>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AxiImp } from './components/asioxImpl';
import { RouImp } from './components/routerInpl';

// import store from './redux-toolkit/store';
// import { Provider } from 'react-redux';
// function App() {
//   const [APIData, setAPIData] = useState([]);

//   useEffect(() => {
//     // axios({
//     //   method: 'get',
//     //   url: 'http://localhost:3500/api/categories',
//     //   headers: { 'Content-Type': 'application/json' }, //responseType: 'application/json',
//     // }).then((res) => {
//     //   setAPIData(res.data);
//     // });
//     axios
//       .get(`http://localhost:3500/api/categories`) // , { headers: { 'Content-Type': 'application/json' },}
//       .then((res) => {
//         setAPIData(res.data.categories); // expects array
//       });
//   }, []);

//   return (
//     <div>
//       {/* <h1>"its my birthday"</h1> */}
//       {APIData.map((data) => {
//         console.log(data);
//         <h1>"its my birthday"</h1>;
//         return <h1>{data}</h1>;
//       })}
//     </div>
//   );
// }

// redux logic via toolkit onging for now.
// const FnCmp = () => {
//   // console.log(str.nme);
//   return (
//     <Provider store={store}>
//       <RouImp nm="Poshan" />
//     </Provider>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AxiImp />} />

        <Route path="/next" element={<RouImp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
