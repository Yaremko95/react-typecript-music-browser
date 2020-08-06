import React, { useState, useEffect, ReactChild, ReactChildren } from "react";
import { useData } from "./DataProvider";
interface DataSourceProps {
  children: ReactChild | ReactChildren;
}

function DataSource({ children }: DataSourceProps) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=queen",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key":
            "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
        },
      }
    );
    const data = await response.json();
    setData(data.data);
  };
  useData();
  return React.cloneElement(children as React.ReactElement<any>, {
    data: data,
    setQuery: setQuery,
  });
}

export default DataSource;
