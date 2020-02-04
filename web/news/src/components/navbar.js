import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./navbar.css";

class Navb extends React.Component {
  handleClickIndia = () => {
    this.props.loo("India");
    this.props.cat("All");
  };
  handleClickUS = () => {
    this.props.loo("US");
    this.props.cat("All");
  };

  handleClickEngland = () => {
    this.props.loo("England");
    this.props.cat("All");
  };
  handleClickGermany = () => {
    this.props.loo("Germany");
    this.props.cat("All");
  };

  handleClickJapan = () => {
    this.props.loo("Japan");
    this.props.cat("All");
  };

  handleClickChina = () => {
    this.props.loo("China");
    this.props.cat("All");
  };

  handleClickFrance = () => {
    this.props.loo("France");
    this.props.cat("All");
  };

  handleClickUAE = () => {
    this.props.loo("UAE");
    this.props.cat("All");
  };

  handleClickLatest = () => {
    this.props.cat("Latest");
    this.props.cat("All");
  };

  handleClickSports = () => {
    this.props.cat("Sports");
  };

  handleClickTechnology = () => {
    this.props.cat("Technology");
  };

  render() {
    return (
      <div>
        <Navbar bg="light" sticky="top">
          <Navbar.Brand
            onClick={() => {
              this.props.loo("Global");
              this.props.cat("All");
            }}
          >
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            TOP NEWS
          </Navbar.Brand>
        </Navbar>
        <Navbar bg="light">
          <Nav className="pos">
            <NavDropdown title={this.props.lo}>
              <NavDropdown.Item onClick={this.handleClickIndia}>
                India
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleClickUS}>
                USA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleClickUAE}>
                UAE
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={this.handleClickLatest}>Latest</Nav.Link>
            <Nav.Link onClick={this.handleClickSports}>Sports</Nav.Link>
            <Nav.Link onClick={this.handleClickTechnology}>Technology</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navb;
