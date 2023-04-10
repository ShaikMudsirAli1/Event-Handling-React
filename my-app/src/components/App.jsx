import React, { useState } from "react";

/**
 * How we can detect when the user interacts  with your app
 * or your components and how you can use React to
 * render different things depending on those "events".
 *
 */

function App() {
  // Using Hooks to change the state.
  // Setting and Using the state.
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    // Whenever I "Click button" will Updated to new value "Submitted"
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      {/* Three components h1, input , button */}
      <h1>{headingText}</h1>
      <input type="text" placeholder="what is your name?" />
      {/* Attribute we are using is "onClick" event */}
      {/* How we can manage "state" and "conditional Rendering" 
          Attribute we are using is "onMouseOver" event
          Condditional rendering using ternary operator 
          setting inline styles in our  component using
          event listeners such as onMouseOver and onMouseOut */}
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
