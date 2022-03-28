import React from "react";

export default function Card({ ...props }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">
          {props.name}({props.status})
        </h5>
        <p className="card-text">
          De la serie {props.category} mas conocido de {props.nickname} y su
          cumpleaños es {props.birthday}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.occupation.map((item, key) => {
          return (
            <li key={key} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
