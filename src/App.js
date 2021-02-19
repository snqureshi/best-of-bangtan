import { getAllSongs } from "./services/api-helper";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home";
import Details from "./components/Details";
import Search from "./components/Search";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getSongInfo = async () => {
      const response = await getAllSongs();
      setSongs(response);
    };
    getSongInfo();
  }, [toggle]);

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home songs={songs} />
      </Route>
      <Route path="/songs/:id">
        <Details songs={songs} setToggle={setToggle} />
      </Route>
      <Route path="/songs/new">
        <Form songs={songs} setToggle={setToggle} />
      </Route>
      <Route path="/search">
        <Search songs={songs} />
      </Route>
    </div>
  );
}

export default App;
