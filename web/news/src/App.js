import React from "react";
import Top from "./components/jsons/topnews";
import News from "./components/jsons/thenews";
import Navb from "./components/navbar";

import "./App.css";
import { Helmet } from "react-helmet";

class App extends React.Component {
  state = { count: 10, location_current: "Global", showPopup: false };

  set_loc = set => {
    this.setState({ location_current: set });
  };

  render() {
    const list1 = [];
    const list2 = [];
    var i;
    for (i = 2; i < this.state.count; i++) {
      list2.push(
        <News
          coun={i}
          lo={this.state.location_current}
          popup={this.togglePopup}
        />
      );
    }
    for (i = 0; i < 2; i++) {
      list1.push(
        <Top
          coun={i}
          lo={this.state.location_current}
          popup={this.togglePopup}
        />
      );
    }
    return (
      <div>
        <Helmet>
          <title>Trending News</title>
          <style>{"body { background-color: #fafafa; }"}</style>
        </Helmet>
        <Navb loo={this.set_loc} lo={this.state.location_current} />
        <div className="trend">
          <p>Top stories</p>
        </div>

        <div className="nn">{list1}</div>

        <div className="latest">
          <p>Latest news</p>
        </div>
        {list2}
      </div>
    );
  }
}
export default App;
