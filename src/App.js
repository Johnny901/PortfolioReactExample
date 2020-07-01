import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
//import Content from "./components/Content";
import Header from "./components/Content";
import About from "./components/Content";
import Portfolio from "./components/Content";
import Contact from "./components/Content";
import Footer from "./components/Content";

class App extends Component {
  render() {
    return (
      <div>
        <body class="w3-black">
          <Nav></Nav>
          <div class="w3-padding-large" id="main">
            <Header></Header>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
