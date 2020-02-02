import React from "react";
import PostData from "./new.json";
import "./border.css";

class News extends React.Component {
  state = { showPopup: false };

  render() {
    let counts = 0;
    var ss;
    const location = this.props.lo;
    const category = this.props.cate;
    return (
      <div>
        {PostData.map((postDetail, index) => {
          if (postDetail.categor === category || category === "All") {
            if (location === "Global") {
              counts++;
              if (counts > 2) {
                ss = postDetail.url.split("https://")[1];
                ss = ss.substring(0, ss.indexOf("com/"));
                ss = ss + "com";
                return (
                  <div key={index}>
                    <div className="wrap">
                      <h2 className="p">{postDetail.title}</h2>
                      <p>
                        {postDetail.content.substring(0, 200) + "......... "}
                        <a href={postDetail.url} class="footnote">
                          {" "}
                          read more
                        </a>
                      </p>
                      <a href={postDetail.url}>{ss}</a>
                    </div>
                  </div>
                );
              }
            } else if (postDetail.loc === location) {
              counts++;
              if (counts > 2) {
                ss = postDetail.url.split("https://")[1];
                ss = ss.substring(0, ss.indexOf("com/"));
                ss = ss + "com";
                return (
                  <div key={index}>
                    <div className="wrap">
                      <h2 className="p">{postDetail.title}</h2>
                      <p>
                        {postDetail.content.substring(0, 200) + "......... "}
                        <a href={postDetail.url} class="footnote">
                          {" "}
                          read more
                        </a>
                      </p>
                      <a href={postDetail.url}>{ss}</a>
                    </div>
                  </div>
                );
              }
            }
          }
          return null;
        })}
      </div>
    );
  }
}

export default News;
