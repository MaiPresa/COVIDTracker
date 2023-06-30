import axios from "axios";
import { useState, useEffect } from 'react';

const APIservice = (url) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await axios.get(url);
        const responseData = response.data
        
        setData(responseData);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    getData(url);
  }, [url]);
  

  return data;
};

export default APIservice;