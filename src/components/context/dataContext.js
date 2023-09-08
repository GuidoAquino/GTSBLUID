import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DataContext = createContext(); 

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [InCart, setInCart] = useState(0)
  const API = "http://localhost:5000/card";

  useEffect(() => {
    const fetchData = async () => {
      
      await axios.get(API)
        .then(res => {
        setData(res.data)      
      }).catch((err) => {
        console.log(err);
      })

    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, cart, setCart, total, setTotal, InCart, setInCart }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };