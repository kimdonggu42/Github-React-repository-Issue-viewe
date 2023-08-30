import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    const res = await axios.get(
      `https://api.github.com/repos/facebook/react/issues?state=open&sort=comments&page=1`,

      {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      },
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return <div className="App"></div>;
}

export default App;
