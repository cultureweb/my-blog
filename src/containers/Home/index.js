import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import Sidebar from "../../components/Sidebar";
import RecentPosts from "../../containers/Home/RecentPosts";
import blogData from "../../data/data.json";

const SideImage = props => {
  return (
    <div className={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
};

const ImageGallery = props => {
  return (
    <div className="galleryPost" style={props.galleryStyle}>
      <section style={{ width: "70%" }}>
        <div className="mainImageWrapper">
          <img
            src={require("../../blogPostImages/" + props.imagesArray[0])}
            alt=""
          />
        </div>
      </section>
      <section className="sideImageWrapper" style={{ width: "30%" }}>
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostImages/" + props.imagesArray[1])}
          alt=""
        />
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostImages/" + props.imagesArray[2])}
          alt=""
        />
        <SideImage
          height={props.sideImageHeight}
          src={require("../../blogPostImages/" + props.imagesArray[3])}
          alt=""
        />
      </section>
    </div>
  );
};

const Home = props => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden"
  };

  const sideImageHeight = galleryHeight / 3;
  // const nElements = 2

  const postImages = blogData.data.map(image => image.blogImage);
  console.log(postImages);

  return (
    <div>
      <Card>
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%%"
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          imagesArray={postImages}
        />
      </Card>
      <section className="homeContainer">
        <RecentPosts style={{ width: "70%" }} />
        <Sidebar />
      </section>
    </div>
  );
};
export default Home;
