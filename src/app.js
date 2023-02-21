/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

  pronoun.forEach(function(pronounItem) {
    adj.forEach(function(adjItem) {
      noun.forEach(function(nounItem) {
        console.log(pronounItem + adjItem + nounItem + ".com");
      });
    });
  });
  console.log("Hello Rigo from the console!");
};
