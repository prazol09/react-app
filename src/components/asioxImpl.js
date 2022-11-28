import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const AxiImp = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9000/a`).then((res) => {
      setAPIData(res.data); // expects array
    });
  }, []);

  return (
    <>
      {APIData.map((todo) => (
        <div key={todo.id}>
          <h1>{`${todo.title}`}</h1>
          <h2>{`${todo.desc}`}</h2>
        </div>
      ))}
      <h1>PRAZOL BASNET</h1>
      <button type="button">
        <Link to="next">Next Page</Link>
      </button>
    </>
  );
};

// export default AxiImp;
