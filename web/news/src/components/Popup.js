import React from "react";
import "./style.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <button onClick={this.props.closePopup}>close</button>
      </div>
    );
  }
}

export default Popup;
