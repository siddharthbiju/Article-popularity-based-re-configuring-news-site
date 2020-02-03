import React from "react";
import PostData from "./new.json";
import "./border.css";

class Top extends React.Component {
  handlecoun = () => {
    alert("saf");
    this.props.print();
  };
  cdect = value => {
    let ll = value;
    var cl;
    if (ll < 2) {
      cl = "wrap2";
    } else {
      cl = "wrap3";
    }
    return cl;
  };
  render() {
    let ll = 0;
    var ss;
    const location = this.props.lo;
    const category = this.props.cate;

    return (
      <div className="nn">
        {PostData.map((postDetail, index) => {
          if (postDetail.categor === category || category === "All") {
            if (location === "Global" && ll < 2) {
              ss = postDetail.url.split("https://")[1];
              ss = ss.substring(0, ss.indexOf("com/"));
              ss = ss + "com";
              ll++;
              return (
                <div key={index}>
                  <div className={this.cdect(ll)}>
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
            } else if (postDetail.loc === location && ll < 2) {
              ss = postDetail.url.split("https://")[1];
              ss = ss.substring(0, ss.indexOf("com/"));
              ss = ss + "com";
              ll++;
              return (
                <div key={index}>
                  <div className={this.cdect(ll)}>
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
          return null;
        })}
      </div>
    );
  }
}

export default Top;
