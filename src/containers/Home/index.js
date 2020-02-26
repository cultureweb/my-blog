import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import Sidebar from "../../components/Sidebar";

const Home = props => {
  const galleryHeight = 651;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden"
  };

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card>
        <div className="galleryPost" style={galleryStyle}>
          <section style={{ width: "70%" }}>
            <div>
              <img
                src={require("../../blogPostImages/workspace.jpg")}
                alt="Last posts"
              />
            </div>
          </section>
          <section className="sideImageWrapper" style={{ width: "30%" }}>
            <div className={{ height: `${sideImageHeight}px` }}>
              <img
                src={require("../../blogPostImages/workspace.jpg")}
                alt="Last posts"
              />
            </div>
            <div className={{ height: `${sideImageHeight}px` }}>
              <img
                src={require("../../blogPostImages/workspace.jpg")}
                alt="Last posts"
              />
            </div>
            <div className={{ height: `${sideImageHeight}px` }}>
              <img
                src={require("../../blogPostImages/workspace.jpg")}
                alt="Last posts"
              />
            </div>
          </section>
        </div>
      </Card>
      <section className="homeContainer">
        <div style={{ width: "70%" }}>
          <Card style={{ marginBottom: "20px" }}>
            <div className="postImageWrapper">
              <img
                src={require("../../blogPostImages/microservices.jpg")}
                alt=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <span>Featured</span>
              <h2>Lorem ipsum</h2>
              <span>posted on july 4, 2020</span>
              <span>posted on july 4, 2020</span>
              <p>
                lorem ipsum lorem ipsullom divide advantage and benefits using
                it
              </p>
              <button>Read More</button>
            </div>
          </Card>

          <Card style={{ marginBottom: "20px 0" }}>Post 2</Card>
        </div>

        <Sidebar />
      </section>
    </div>
  );
};
export default Home;
