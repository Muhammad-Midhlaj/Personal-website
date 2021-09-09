import React from "react";
import HomeLight from "../all-home-version/HomeLight";
import AnimatedCursor from "react-animated-cursor"


const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <>
      <HomeLight />
      <div className="App">
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
    </div>
      
    </>
  );
};

export default HomeDark;
