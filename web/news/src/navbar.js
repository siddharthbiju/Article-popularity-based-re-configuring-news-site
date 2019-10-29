import React, { PureComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

class Navb extends React.Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#f1f1f1" }}>
        <Navbar.Brand href="#home">Trending News</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
    );
  }
}
export default Navb;
