import React, { Component } from "react";
import Chair from "./Chair";
import Infomation from "./Infomation";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Chair />
        <Infomation />
      </div>
    );
  }
}
