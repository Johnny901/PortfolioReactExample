import React, { Component } from "react";

export default class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="w3-container w3-padding-32 w3-center w3-black"
        id="home"
      >
        <h1 className="w3-jumbo">
          <span className="w3-hide-small">I'm</span> John Doe.
        </h1>
        <p>Photographer and Web Designer.</p>
        <img
          src="/w3images/man_smoke.jpg"
          alt="boy"
          className="w3-image"
          width="992"
          height="1108"
        />
      </header>
    );
  }
}
