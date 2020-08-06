import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DataSource from "../data/DataSource";
import HomeContainer from "../HomeContainer";
function Home(props: RouteComponentProps) {
  return (
    <DataSource>
      <HomeContainer />
    </DataSource>
  );
}

export default Home;
