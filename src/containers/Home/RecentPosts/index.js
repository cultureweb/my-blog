import React from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

const RecentPosts = props => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img src={require("../../../blogPostImages/workspace.jpg")} alt="" />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Lorem ipsum</h2>
          <span>posted on july 4, 2020</span>
          <span>posted on july 4, 2020</span>
          <p>
            lorem ipsum lorem ipsullom divide advantage and benefits using it
          </p>
          <button>Read More</button>
        </div>
      </Card>

      <Card style={{ marginBottom: "20px 0" }}>Post 2</Card>
    </div>
  );
};

export default RecentPosts;
