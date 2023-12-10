import { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

import Home from "./Pages/Home";
import { CountryCard } from "./components/CountryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <SearchBar />
    </>
  );
}

export default App;
