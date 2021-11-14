import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import CastPage from "./Components/CastPage/CastPage";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

import "./App.css";


function App() {
  const [show, setShow] = useState();
  const [cast, setCast] = useState();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4/cast")
      .then(function (response) {
        setCast(response.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4")
      .then(function (response) {
        setShow(response.data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <Router>
      <div>
        <AppBar className="bar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="insideBar" to="/">
              Home
            </Link>
          </Typography>
        </AppBar>
        <Switch>
          <Route exact={true} path="/">
            <MainPage show={show} cast={cast} />
          </Route>
          <Route exact path="/cast">
            <CastPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
