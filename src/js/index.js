//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";



//include your index.css file into the bundle
import "../styles/index.css";

//import your own components
// import TrafficLight from "./component/TrafficLight.jsx";

import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));