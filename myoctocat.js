/*
  p5.js is a JavaScript library to make coding accessible
  for artists, designers, educators, and beginners.

  Read the docs at https://p5js.org/reference/
  Check out examples at https://p5js.org/examples/

  octocat.js is a JavaScript library to make octocats.
  Read the docs at https://github.com/octocademy/octocat.js
*/
import p5 from "p5.js";
import Octocat from "octocat.js";

let octocat;

p5.setup = () => {
  createCanvas(300, 300);
  octocat = new Octocat();

  // Put your cursor below the arrows to start editing
  // then click on an octocat setting to insert it
  // in your code. When you make changes, your octocat
  // will automatically update!
  //
  // ⬇️️️️️️️️️️️️️️️️️️️️️️️️⬇️⬇️⬇️⬇️

  octocat.setEyes("Excited Open")
  octocat.setBodyColor({ primary: "#5F6196", underside: "#C69848", suctions: "#E1CFC5" })
  octocat.setFaceColor({ face: "#FFC5AF", nose: "#A34F3E" })
  octocat.setEyeColor("#503B37")
  octocat.setMouth("Happy Closed")
  octocat.setHair("Soft Waves Short")
  octocat.setHairColor("#724437")
  octocat.setFacialHair("Full Beard")
  octocat.setTop("T-shirt")
  octocat.setBottom("Overalls")
  octocat.setFootwear("Cyclist Shoes")
  octocat.setHeadgear("Cyclist Helmet")
  octocat.setProp("Githawk")
  octocat.setProp("Skateboard")
  octocat.setProp("Githawk")
  octocat.setPuddleColor("#42185A")
};

// ♻️ The draw method gets called repeatedly
// you can make changes here to animate!
p5.draw = () => {
  background("white");
  octocat.draw();
};

