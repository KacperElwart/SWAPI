import axios from "axios";
import "./App.css";
import { Card } from "./components/card";
import { useState, useEffect } from "react";
import logo from "./assets/logo.jpg";

function App() {
  const [filtredPeople, setFiltredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people", {
        "Content-Type": "application/json",
      })
      .then((response) =>
        setPeople(
          response.data.results.map((detail) => {
            return {
              name: detail.name,
              films: detail.films,
              hair: detail.hair_color,
              height: detail.height,
              mass: detail.mass,
              gender: detail.gender,
            };
          })
        )
      );
  }, []);

  const filterName = (event) => {
    setFiltredPeople(
      people.filter((element) => {
        return element.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <section className="app">
      <img src={logo} className="logo" />
      <input onChange={filterName} className="search" />
      <div className="card__layout">
        {people.length &&
          !filtredPeople.length &&
          people.map((person) => <Card people={person} />)}

        {filtredPeople.length &&
          filtredPeople.map((person) => <Card people={person} />)}
      </div>
    </section>
  );
}

export default App;
