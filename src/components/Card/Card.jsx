import React from "react";
import Button from "../Button/Button";

import "./Card.css";

const Card = ({ framework, changeFramework }) => {
  return (
    <div className="card__may">
      <div className="card">
        <div className="card__container-img"></div>
        <h2 className="card__title">{framework.phrase}</h2>
        <p className="card__description">{framework.author}</p>

        <div className="card__container-btn">
          <Button handleClick={changeFramework} />
        </div>
      </div>
    </div>
  );
};

export default Card;
