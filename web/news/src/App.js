import React from "react";
import News from "./components/jsons/thenews";
import Navb from "./components/navbar";
import "./App.css";
import { Helmet } from "react-helmet";

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
      <div>
        <Helmet>
          <style>{"body { background-color: #fafafa; }"}</style>
        </Helmet>
        <Navb loo={this.set_loc} lo={this.state.location_current} />
        {list}
      </div>
    );
  }
}
export default App;
