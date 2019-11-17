import React from "react";
import Top from "./components/jsons/topnews";
import News from "./components/jsons/thenews";
import Navb from "./components/navbar";

import "./App.css";
import { Helmet } from "react-helmet";

class App extends React.Component {
  state = {
    count: 10,
    location_current: "Global",
    showPopup: false,
    lis1coun: 0
  };

  set_loc = set => {
    this.setState({ location_current: set });
  };

  set_lis1loc = () => {
    alert("called");
    var p = this.state.lis1coun;
    p++;
    this.setState({ lis1coun: p });
  };

  render() {
    return (
      <div>
        <Helmet>
          <style>{"body { background-color: #fafafa; }"}</style>
        </Helmet>
        <Navb loo={this.set_loc} lo={this.state.location_current} />
        <div className="trend">
          <p>Top stories</p>
        </div>
        ;
        <div>
          <Top lo={this.state.location_current} />
        </div>
        <div className="latest">
          <p>Latest news</p>
        </div>
        <News lo={this.state.location_current} />
      </div>
    );
  }
}
export default App;
