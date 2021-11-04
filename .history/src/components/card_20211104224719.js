import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";

const Card=({people,...props}) {
  const [filmDetail, setFilmDetail] = useState([]);
  useEffect(() => {
    people.films.forEach((element) => {
      axios
        .get(element, {
          "Content-Type": "application/json",
        })
        .then((response) =>
          setFilmDetail((element) => [...element, response.data])
        );
    });
  }, []);

  return (
    <div className="card">
      <p className="card--name">{people.name}</p>
      <p className="card--desc">
        <span className="card--desc--span">GENDER:</span> {people.gender}
      </p>
      <p className="card--desc">
        <span className="card--desc--span">HAIR COLOR:</span>{" "}
        {people.hair}
      </p>
      <p className="card--desc">
        <span className="card--desc--span">HEIGHT:</span> {people.height}
      </p>
      <p className="card--desc">
        <span className="card--desc--span">MASS:</span> {people.mass}
      </p>
      <p className="film__title">Films</p>
      {filmDetail &&
        filmDetail.map((element) => (
          <details>
            <summary className="card-desc">{element.title}</summary>
            <p className="card--desc">{element.director}</p>
            <p className="card--desc">{element.release_date}</p>
          </details>
        ))}
    </div>
  );
}


export default Card;