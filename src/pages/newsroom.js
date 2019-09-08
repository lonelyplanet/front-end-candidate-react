import React, { Component } from "react";
import Header from "../components/header";

class newsroom extends Component {
  render() {
    return (
      <div>
          <Header />
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default newsroom;