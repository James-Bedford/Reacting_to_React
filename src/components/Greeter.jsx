import React from "react";

const Greeter = (props) => {
  let phrase = "";
  let name = "";
  return (
    <>
      <h1>
        Hello {props.name}. {props.phrase}
      </h1>
    </>
  );
};

export default Greeter;
