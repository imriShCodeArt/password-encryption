import React from "react";
import { hot } from "react-hot-loader/root";

//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

const App = () => {
  return (
    <div className='container'>
      <div>Name: App</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
};

export default hot(App);
