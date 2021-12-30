import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Header } from "../Header";
import { Home } from "../Home";
import { PageError } from "../PageError";
import { ComicsPage } from "../ComicsPage";

import "./app.scss";

export class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="comics/:id" element={<ComicsPage />} />
            <Route path="*" element={<PageError />} />
          </Routes>
          <Outlet />
        </Router>
      </>
    );
  }
}
