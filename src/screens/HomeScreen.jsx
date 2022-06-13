import React, {useState, useEffect} from "react";
import http from "../api/axios";

const fetchData= async () => {
  return await http.get(`/data`);
};

const HomeScreen = () => {
  const [data, setData] = useState("No data from backend :( Waiting ....")

  useEffect(() => {
    fetchData().then(res => setData(res?.data));
  }, []);

  console.log(data)

  return (
    <div className="App">
      <h1>Here is data from backend: <p style={{color: "red"}}>{data}</p></h1>
      <img
        src="https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt="Home photo"
        loading="lazy"
      />
    </div>
  );
};

export default HomeScreen;
