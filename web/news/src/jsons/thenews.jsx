import React from "react";
import PostData from "./new.json";
import "./border.css";

class News extends React.Component {
  render() {
    const ll = this.props.coun;
    const location = this.props.lo;
    return (
      <div>
        {PostData.map((postDetail, index) => {
          if (index === ll && location === "Global")
            return (
              <div key={index}>
                <h1 className="bor">
                  <h2 className="p">{postDetail.title}</h2>
                  <p>{postDetail.content}</p>
                  <a href={postDetail.url}>{postDetail.url}</a>
                </h1>
              </div>
            );
          else if (index === ll && postDetail.loc === location)
            return (
              <div key={index}>
                <h1 className="bor">
                  <h2 className="p">{postDetail.title}</h2>
                  <p>{postDetail.content}</p>
                  <a href={postDetail.url}>{postDetail.url}</a>
                </h1>
              </div>
            );
          return null;
        })}
      </div>
    );
  }
}

export default News;