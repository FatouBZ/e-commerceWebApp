import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost/eCommerce/login";
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.fname}</li>
        ))}
      </ul>
    </div>
  );
};
export default MyComponent;
