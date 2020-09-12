import React, { useState, useEffect } from "react";
import { UnsplashImage } from "./UnsplashImage";
import styles from "./Home.style";
import "antd/dist/antd.css";
import axios from "axios";
import { Loader } from "./Loader";
//import { Heading } from "./Header";

import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import { Button, Input, Tabs } from "antd";
import {
  AppstoreFilled,
  PictureOutlined,
  CameraFilled,
  BellFilled,
} from "@ant-design/icons";

const { Search } = Input;
const { TabPane } = Tabs;
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=gR22BHtDWvSfc052UWKIh7rSSOxV6NyOfQfHSSkjvko`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      }, []);
  };

  // export default class Home extends Component {
  //   state = {
  //     images: [],
  //   };
  //   componentDidMount() {
  //     axios
  //       .get(
  //         " https://api.unsplash.com/photos/?client_id=gR22BHtDWvSfc052UWKIh7rSSOxV6NyOfQfHSSkjvko"
  //       )
  //       .then((res) => {
  //         setImage([...images, ...res.data]);
  //       });
  //   }

  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <div style={styles.back}>
        <img
          src={require("/home/test/my-appnew/src/components/assets/back.jpg")}
          alt=""
          style={{
            height: "500px",
            width: "1536px",
          }}
        />
      </div>
      <div style={styles.header}>
        <div>
          <CameraFilled style={styles.menu1} />
          <p style={styles.menu}>Home</p>
          <p style={styles.menu}>Collection</p>
          <p style={styles.menu}>Explore</p>
          <Button>Submit a photo</Button>
          <BellFilled style={styles.menu} />
          <img
            src={require("/home/test/my-appnew/src/components/assets/profile.png")}
            alt=""
            style={{
              height: "30px",
              width: "30px",
              marginRight: 10,
              marginLeft: 10,
            }}
          />
        </div>
        <div>
          <div style={styles.header2}>
            <img
              src={require("/home/test/my-appnew/src/components/assets/back.jpg")}
              alt=""
              style={{
                height: "350px",
                width: "1250px",
                position: "absolute",
              }}
            />
            <div style={styles.header3}>
              <h1 style={styles.header4}>Unsplash</h1>
              <p style={styles.header5}> Beautiful full photos</p>
              <p style={styles.header6}>
                Giftet by worlds most beautiful generous photographer's
              </p>
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                onSearch={(value) => console.log(value)}
                style={styles.searchbar}
              />
              <br></br>
              <br></br>
              <p style={{ marginRight: 85 }}>
                Search the latest photos like nature, love , commercial ,
                scenic's and background pictures can be downloaded.
              </p>
              <div style={styles.preview}></div>
            </div>
          </div>
        </div>
        <div style={styles.tab}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Trending" key="1">
              {/* <Heading /> */}

              {/* <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                //loader={<Loader />}
              >
                <WrapperImages>
                  {images.map((image) => (
                    <UnsplashImage url={image.urls.thumb} key={image.id} />
                  ))}
                </WrapperImages>
              </InfiniteScroll> */}
              <img
                src={require("/home/test/my-appnew/src/components/assets/9.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",

                  display: "inline",
                  padding: 20,
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/10.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/11.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "350px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/4.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "250px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/12.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",

                  display: "inline",
                  padding: 20,
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/6.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/7.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "350px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/8.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "250px",
                  padding: 20,
                  display: "inline",
                }}
              />
            </TabPane>
            <TabPane tab="New" key="2">
              <img
                src={require("/home/test/my-appnew/src/components/assets/1.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",

                  display: "inline",
                  padding: 20,
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/2.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/3.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "350px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/4.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "250px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/5.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",

                  display: "inline",
                  padding: 20,
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/6.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/7.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "350px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/8.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "250px",
                  padding: 20,
                  display: "inline",
                }}
              />
            </TabPane>
            <TabPane tab="Following" key="3">
              <img
                src={require("/home/test/my-appnew/src/components/assets/1.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",

                  display: "inline",
                  padding: 20,
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/2.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/3.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "350px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/4.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "250px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/5.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",

                  display: "inline",
                  padding: 20,
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/6.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/7.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "350px",
                  padding: 20,
                  display: "inline",
                }}
              />
              <img
                src={require("/home/test/my-appnew/src/components/assets/8.jpeg")}
                alt=""
                style={{
                  height: "300px",
                  width: "250px",
                  padding: 20,
                  display: "inline",
                }}
              />
            </TabPane>
          </Tabs>
        </div>
        <PictureOutlined
          style={{
            display: "inline",
            position: "absolute",
            marginTop: 345,
            marginLeft: 580,
          }}
        />
        <AppstoreFilled
          style={{
            display: "inline",
            position: "absolute",
            marginTop: 345,
            marginLeft: 550,
          }}
        />
      </div>
    </div>
  );
}
