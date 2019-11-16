import React from "react";
import PostData from "./new.json";
import "./border.css";

class Top extends React.Component {
  state = { showPopup: false };

  render() {
    const ll = this.props.coun;
    const location = this.props.lo;
    var cl;
    if (ll === 0) {
      cl = "wrap2";
    } else {
      cl = "wrap3";
    }

    return (
      <div>
        {PostData.map((postDetail, index) => {
          if (index === ll && location === "Global")
            return (
              <div key={index}>
                <div className={cl}>
                  <h2 className="p">{postDetail.title}</h2>
                  <p>{postDetail.content}</p>
                  <a href={postDetail.url}>Visit website -></a>
                </div>
              </div>
            );
          else if (index === ll && postDetail.loc === location)
            return (
              <div key={index}>
                <div className={cl}>
                  <h2 className="p">{postDetail.title}</h2>
                  <p>{postDetail.content}</p>
                  <a href={postDetail.url}>Visit website -></a>
                </div>
              </div>
            );
          return null;
        })}
      </div>
    );
  }
}

export default Top;
