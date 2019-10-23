import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

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
        <Navbar style={{ backgroundColor: "#f1f1f1" }}>
          <Navbar.Brand
            href="#"
            onClick={() => {
              this.props.loo("Global");
            }}
          >
            Trending News
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={this.handleClickIndia}>
              India
            </Nav.Link>
            <Nav.Link href="#" onClick={this.handleClickUS}>
              US
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navb;
