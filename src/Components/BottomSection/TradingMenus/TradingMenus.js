import React from "react";
import pic1 from "../../../Images/All foods/Spaghetti-Bolognese (1).jpg";
import pic2 from "../../../Images/All foods/water-melon-arbuz-lomtiki-sok-4935.jpg";
import pic3 from "../../../Images/All foods/Low-Carb-Butter-Chicken-FI.jpg";
import pic4 from "../../../Images/All foods/vegetarian-wild-garlic-pizza-93962735.jpg";
import pic5 from "../../../Images/All foods/meatballs-fresh-spinach-egg-parmesan-cheese-clay-bowl-homemade-italian-.jpg";
import "./TradingMenus.css";

const TradingMenus = () => {
  return (
    <div id="menus-section">
      <h4 style={{ display: "grid", placeItems: "center"}}>Daily Trending Menus</h4>
      <p style={{display: "grid", placeItems: "center"}}>Lorem Ipsum</p>
      <div className="Menu-Item">
        <h4>#1</h4>
        <div>
          <h6 style={{ marginBottom: 10 }}>
            Medium Spicy Spagethi Italiano
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h5>$5.6</h5>{" "}
            <p>
              Order <span>89x</span>{" "}
            </p>
          </div>
        </div>
        <img style={{ width: 80, borderRadius: 10 }} src={pic1} alt="" />
      </div>
      <div className="Menu-Item">
        <h4>#2</h4>
        <div>
          <h6 style={{ marginBottom: 10 }}>
          Watermelon juice with ice
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h5>$5.6</h5>{" "}
            <p>
              Order <span>89x</span>{" "}
            </p>
          </div>
        </div>
        <img style={{ width: 80, borderRadius: 10 }} src={pic2} alt="" />
      </div>
      <div className="Menu-Item">
        <h4>#3</h4>
        <div>
          <h6 style={{ marginBottom: 10 }}>
          Chicken curry special with cucumber
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h5>$5.6</h5>{" "}
            <p>
              Order <span>89x</span>{" "}
            </p>
          </div>
        </div>
        <img style={{ width: 80, borderRadius: 10 }} src={pic3} alt="" />
      </div>
      <div className="Menu-Item">
        <h4>#4</h4>
        <div>
          <h6 style={{ marginBottom: 10 }}>
          Italiano Pizza With Garlic
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h5>$5.6</h5>{" "}
            <p>
              Order <span>89x</span>{" "}
            </p>
          </div>
        </div>
        <img style={{ width: 80, borderRadius: 10 }} src={pic4} alt="" />
      </div>
      <div className="Menu-Item">
        <h4>#5</h4>
        <div>
          <h6 style={{ marginBottom: 10 }}>
          Tuna Soup spinach with himalaya salt
          </h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h5>$5.6</h5>{" "}
            <p>
              Order <span>89x</span>{" "}
            </p>
          </div>
        </div>
        <img style={{ width: 80, borderRadius: 10 }} src={pic5} alt="" />
      </div>
    </div>
  );
};

export default TradingMenus;
