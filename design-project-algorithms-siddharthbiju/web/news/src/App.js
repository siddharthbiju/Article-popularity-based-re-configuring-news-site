import React from "react";
import News from "./jsons/thenews";
import Navb from "./navbar";

class App extends React.Component {
  state = { count: 2 };
  render() {
    const list = [];
    for (var i = 0; i < this.state.count; i++) {
      list.push(<News coun={i} />);
    }
    return (
      <div>
        <Navb />
        {list}
      </div>
    );
  }
}
export default App;
