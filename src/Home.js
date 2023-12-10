import React, { Component } from "react";
import emoji from './emoji.svg'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>HELLO</h2>
        <p>Here is my home page.</p>
        <img alt="laughing crying emoji" src={emoji} />
      </div>
    );
  }
}
 
export default Home;