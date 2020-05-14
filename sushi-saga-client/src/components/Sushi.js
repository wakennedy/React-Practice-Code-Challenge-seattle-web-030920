import React, { Fragment } from "react";

const Sushi = (props) => {
  return (
    <Fragment>
      <div className="sushi">
        <div className="plate" onClick={() => props.eat(props.sushi)}>
          {props.taken ? null : (
            <img alt="sushi" src={props.sushi.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    </Fragment>
  );
};

export default Sushi;
