import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <section className="green"></section>
        <section className="red"></section>
        <section className="orange"></section>
        <section className="blue"></section>
        <section className="image flex justify_center items_center">
          <div className="">
            <figure>
              <img className="dapp" src="/99dapp.png" alt="" />
            </figure>
            <h1 className="heading">
              App store for next generation Decentralized application.
            </h1>

            <figure className="lottie">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_mriqekmt.json"
                background="transparent"
                speed="1"
                style={{
                  width: "100%",
                  margin: "auto",
                  marginTop: "-3rem",
                  // border: "1px solid gray",
                }}
                loop
                autoplay
              ></lottie-player>
            </figure>
            <img className="soon_img" src="/soon.png" alt="" />
          </div>
          <figure>
            <img
              className="side_logo"
              src="new_web_asset/assets/we_are/curve_line.webp"
              alt=""
            />
          </figure>
        </section>
      </div>
    </>
  );
}
export default App;
