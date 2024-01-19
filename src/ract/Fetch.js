
import React, { useEffect, useState } from 'react';

const baseUrl = "http://localhost:3002/data";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(baseUrl).then((res) => res.json())  // Convert the response to JSON
      .then((fetcheddata) => setData(fetcheddata ))  // Update the state with the fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div align="center">
      {data.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1> 
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
