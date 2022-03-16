import React, { Component } from "react";
import { Heroes } from "../Heroes";
import "./home.scss";

export class Home extends Component {
  render() {
    return (
      <>
        <main className="main">
          <Heroes />
        </main>
      </>
    );
  }
}
