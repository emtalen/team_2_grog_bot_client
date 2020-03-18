import React from "react";
import SelectAlcohol from "./SelectAlcohol";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const DrinkDetails = props => {
  let cocktail = props.cocktail;
  return (
    <Modal open={true} closeIcon>
      <Modal.Content>
        <div
          className="card"
          key={cocktail.id}
          id="specific-cocktail-container"
        >
          <div className="image left">
            <img className="drinkImage" src={cocktail.image} alt="Cocktail" />
          </div>
          <div className="content">
            <div className="header1">{cocktail.name}</div>
            <div className="meta">{cocktail.category}</div>
            <div className="description">
              Ingredients:
              {cocktail.ingredients.map(item => {
                return (
                  <div key={cocktail.id} id="ingredients-container">
                    {item.name} {item.measure}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="extra content">
            Instructions: {cocktail.instructions}
          </div>
          <div className="extra content">Glass: {cocktail.glass}</div>
          <SelectAlcohol />
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default DrinkDetails;
