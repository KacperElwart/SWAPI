import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";

export function Card(props) {
  const [filmDetail, setFilmDetail] = useState([]);
  useEffect(() => {
    props.people.films.forEach((element) => {
      axios
        .get(element, {
          "Content-Type": "application/json",
        })
        .then((response) =>
          setFilmDetail((element) => [...element, response.data])
        );
    });
  }, []);
  console.log(filmDetail);
  return (
    <div className="card">
      <p className="card--name">{props.people.name}</p>
      <p className="card--desc">
        <span className="card--desc--span">GENDER:</span> {props.people.gender}
      </p>
      <p className="card--desc">
        <span className="card--desc--span">HAIR COLOR:</span>{" "}
        {props.people.hair}
      </p>
      <p className="card--desc">
        <span className="card--desc--span">HEIGHT:</span> {props.people.height}
      </p>
      <p className="card--desc">
        <span className="card--desc--span">MASS:</span> {props.people.mass}
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
