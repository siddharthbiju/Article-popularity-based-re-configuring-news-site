import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./navbar.css";

class Navb extends React.Component {
  handleClickIndia = () => {
    this.props.loo("India");
  };
  handleClickUS = () => {
    this.props.loo("US");
  };

  handleClickEngland = () => {
    this.props.loo("England");
  };
  handleClickGermany = () => {
    this.props.loo("Germany");
  };

  handleClickJapan = () => {
    this.props.loo("Japan");
  };

  handleClickChina = () => {
    this.props.loo("China");
  };

  handleClickFrance = () => {
    this.props.loo("France");
  };

  handleClickUAE = () => {
    this.props.loo("UAE");
  };

  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand
            href="#"
            onClick={() => {
              this.props.loo("Global");
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
              <NavDropdown.Item onClick={this.handleClickEngland}>
                England
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleClickGermany}>
                Germany
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleClickFrance}>
                France
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleClickJapan}>
                Japan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleClickChina}>
                China
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>Finance</Nav.Link>
            <Nav.Link>Lifestyle</Nav.Link>
            <Nav.Link>Technology</Nav.Link>
            <Nav.Link>Health</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navb;
