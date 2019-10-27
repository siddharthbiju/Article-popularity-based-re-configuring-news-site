import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Navb extends React.Component {
  handleClickIndia = () => {
    this.props.loo("India");
  };
  handleClickUS = () => {
    this.props.loo("US");
  };
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="LOCATION" id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={this.handleClickIndia}>
                  India
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  USA
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  UAE
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  England
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  Germany
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  France
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  Japan
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={this.handleClickUS}>
                  China
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Sports</Nav.Link>
              <Nav.Link href="#">Finance</Nav.Link>
              <Nav.Link href="#">Lifestyle</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search for topics & sources"
                className="mr-sm-2"
              />
              <Button variant="info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navb;
