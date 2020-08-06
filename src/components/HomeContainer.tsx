import React from "react";
import { EnumSongItem } from "../types/types";

interface SearchProps {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  data?: Array<EnumSongItem>;
}
// type HomeContainerProps = SearchProps & EnumSongsItems;
function HomeContainer(props: SearchProps) {
  console.log(props);
  return <input type="text" placeholder="Search" />;
}

export default HomeContainer;
