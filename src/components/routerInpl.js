import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
// import { counterSlice } from '../redux-toolkit/counter';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../redux-toolkit/counter';
import { increment, decrement } from '../redux-toolkit/counter';
import { logIn, logOut } from '../redux-toolkit/login';

export const RouImp = () => {
  // const a = counterSlice.state;
  const { count } = useSelector((state) => state.counter);
  const { isLoggedIn } = useSelector((state) => state.login);
  // console.log(isLoggedIn);
  const dispatch = useDispatch(); // necessary for using reducers
  if (isLoggedIn == 0) {
    // no logged in
    return (
      <div>
        <h1>user not logged in!!</h1>
        <button onClick={() => dispatch(logIn())}>log in</button>

        <div id="page">
          {/* <div id="header">Header</div> */}
          <div id="menu">Menu</div>
          <div id="content">Content</div>
          {/* <div id="footer">Footer</div> */}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>
        Hello world {count} --{isLoggedIn}--
      </h1>
      {/* <h1>The Count is: {2}</h1> */}
      <button onClick={() => dispatch(increment())}>increnent</button>
      <button onClick={() => dispatch(decrement())}>decrenent</button>

      <button type="button">
        <Link to="/">Go Back</Link>
      </button>
      <button onClick={() => dispatch(logOut())}>log out</button>
      {/* <input>button</input> */}
    </div>
  );
};
