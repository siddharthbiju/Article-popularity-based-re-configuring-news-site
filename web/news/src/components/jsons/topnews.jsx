import React from "react";
import PostData from "./new.json";
import "./border.css";

class Top extends React.Component {
  handlecoun = () => {
    alert("saf");
    this.props.print();
  };

  render() {
    let ll = 0;
    var ss;
    const location = this.props.lo;
    var cl;
    if (ll === 0) {
      cl = "wrap2";
    } else {
      cl = "wrap3";
    }

    return (
      <div className="nn">
        {PostData.map((postDetail, index) => {
          if (location === "Global" && ll < 2) {
            ss = postDetail.url.split("https://")[1];
            ss = ss.substring(0, ss.indexOf("com/"));
            ss = ss + "com";
            ll++;
            return (
              <div key={index}>
                <div className={cl}>
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
                <div className={cl}>
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
          return null;
        })}
      </div>
    );
  }
}

export default Top;