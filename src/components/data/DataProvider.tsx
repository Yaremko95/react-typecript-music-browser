import React from "react";
import { EnumSongItem } from "../../types/types";

// type State = [
//   Array<EnumSongItem>,
//   React.Dispatch<React.SetStateAction<Array<EnumSongItem>>>[]
// ];
// type State = (Array<EnumSongItem> | React.Dispatch<React.SetStateAction<never[]>>)[]
type DataProviderProps = { children: React.ReactNode };

const DataContext = React.createContext<any | undefined>(undefined);

export const useData = () => {
  const context = React.useContext(DataContext);
  const [data, setData] = context;
  const fetchData = async (query: string) => {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
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
  return {
    data,
    setData,
    fetchData,
  };
};

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = React.useState([]);
  const value = React.useMemo(() => [data, setData], [data]);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
