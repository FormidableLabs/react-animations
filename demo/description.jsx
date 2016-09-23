import React from "react";
import ReactDOM from "react-dom";
import Radium, { Style } from "radium";


const Demo = ({ styles, duration, animation }) => {
  const headerStyle = {
    ...(styles[animation]),
    animationDuration: `${duration}s`,
    width: 500,
    fontSize: 60,
    margin: '30px auto',
  };
  const descriptionStyle = {
    ...styles.fadeInUp,
    animationDuration: '2s',
    fontSize: 16,
  }

  // I'm so sorry.
  let dummies = Object.keys(styles).map(
    key => <span key={key} style={styles[key]} />
  );

  return (
    <div>
    {dummies}
    <h1 key={animation} style={headerStyle}>react-effects</h1>
    <span style={descriptionStyle}>A collection of animations for CSS-in-JS libraries </span>
    </div>
  )
}

export default Radium(Demo);
