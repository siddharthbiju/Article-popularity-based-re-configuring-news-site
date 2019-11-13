import React from "react";
import News from "./jsons/thenews";
import Navb from "./navbar";
import "./App.css";

class App extends React.Component {
  state = { count: 10, location_current: "Global" };

  set_loc = set => {
    this.setState({ location_current: set });
  };
  render() {
    const list = [];
    for (var i = 0; i < this.state.count; i++) {
      list.push(<News coun={i} lo={this.state.location_current} />);
    }
    return (
      <div className="Main_design">
        <Navb loo={this.set_loc} lo={this.state.location_current} />
        {list}
      </div>
    );
  }
}
export default App;
