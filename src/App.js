import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
//import Content from "./components/Content";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <body class="w3-black">
          <Nav></Nav>
          <div class="w3-padding-large">
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
