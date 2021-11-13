import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import CastPage from "./Components/CastPage/CastPage";

function App() {
  const [show, setShow] = useState();
  const [cast, setCast] = useState();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4/cast")
      .then(function (response) {
        setCast(response.data);
        console.log(response);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);
  console.log(cast);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4")
      .then(function (response) {
        setShow(response.data);
        console.log(show);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, [setShow]);



  return (
    <Router>
      <div>
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
