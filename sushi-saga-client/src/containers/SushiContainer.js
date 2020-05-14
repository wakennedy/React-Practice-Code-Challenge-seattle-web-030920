import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((piece) => {
          return (
            <Sushi
              sushi={piece}
              key={piece.id}
              eat={props.eat}
              taken={props.eaten.includes(piece)}
            />
          );
        })}
        <MoreButton more={props.more} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
