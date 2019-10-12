import React from "react";
import PostData from "./new.json";

class News extends React.Component {
  render() {
    const ll = this.props.coun;

    return (
      <div>
        {PostData.map((postDetail, index) => {
          if (index === ll)
            return (
              <div key={index}>
                <h1>{postDetail.title}</h1>
                <p>{postDetail.content}</p>
                <a href={postDetail.url}>{postDetail.url}</a>
              </div>
            );
        })}
      </div>
    );
  }
}

export default News;
