import React from "react";
import PostData from "./new.json";
import "./border.css";
import { Container, Row, Col } from 'reactstrap';

class News extends React.Component {
  render() {
    const ll = this.props.coun;
    const location = this.props.lo;
    return (
      <div>
        <Container>
        <Col>
        {PostData.map((postDetail, index) => {
          if (index === ll && location === "Global")
            return (
              <Row>
              <th>
              <div key={index}>
                <h1 className="bor">
                  <h2 className="p">{postDetail.title}</h2>
                  <p>{postDetail.content}</p>
                  <a href={postDetail.url}>{postDetail.url}</a>
                </h1>
              </div>
              </th>
              </Row>
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
     </Col>
     </Container>
      </div>
    );
  }
}

export default News;
