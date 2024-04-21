import React from "react";

const Header = () => {
  return (
    <div
      style={{
        // backgroundColor: "white",
        // position: "absolute",
        // margin: "20px 20px 0px 200px",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
        width: "80%",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="../logo.svg" style={{ width: "1000px", height: "100px" }} />
    </div>
  );
};

export default Header;
