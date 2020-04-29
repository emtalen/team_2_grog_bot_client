import React from "react";
import SelectAlcohol from "./SelectAlcohol";
import { Header, Image, Modal } from "semantic-ui-react";

const DrinkDetails = props => {
  let cocktail = props.cocktail;
  return (
    <Modal open={true} closeIcon>
      <Modal.Content>
        <Modal.Header>{cocktail.category}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={cocktail.image} />
          <Modal.Description>
            <Header>{cocktail.name}</Header>
            Ingredients:
            {cocktail.ingredients.map(item => {
              return (
                <ul>
                  <li key={cocktail.id} id="ingredients-list">
                    {item.name} {item.measure}
                  </li>
                </ul>
              );
            })}
            <p>Instructions: {cocktail.instructions}</p>
            <p>Glass: {cocktail.glass}</p>
          </Modal.Description>
        </Modal.Content>
        <div>
          <SelectAlcohol />
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default DrinkDetails;
