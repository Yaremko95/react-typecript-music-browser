import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DataSource from "../data/DataSource";
import HomeContainer from "../HomeContainer";
import { useData } from "../data/DataProvider";
function Home(props: RouteComponentProps) {
  const { setData, fetchData } = useData();
  return <div></div>;
}

export default Home;
