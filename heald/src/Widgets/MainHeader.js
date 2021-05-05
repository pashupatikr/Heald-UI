import React from "react";
import logo1 from "../Elements/Image/Logos/ekBajar1.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from '@material-ui/icons/Search';



export default function MainHeader() {
  return (
    <div>
      <div className="main-header">
        <img
          style={{ height: "60px", width: "60px", float: "left" }}
          src={logo1}
        />
        <span
          style={{
            fontSize: "25px",
            color: "#1CABB3",
            float: "left",
            marginTop: "12px",
            marginLeft: "-8px",
            fontWeight: "bolder",
          }}
        >
          ekBajar
        </span>
        <div style={{ marginLeft: "300px" }}>
          <div
            style={{
              float: "left",
              backgroundColor: "white",
              height: "34px",
              marginTop: "13px",
              width: "50px",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          >
            <div style={{ fontSize: "12px", padding: "8px 0px 0px 12px" }}>
              All{" "}
              <ArrowDropDownIcon
                style={{ marginTop: "-5px", float: "right" }}
              ></ArrowDropDownIcon>
            </div>
          </div>
          <input
            style={{
              float: "left",
              height: "30px",
              margin: "12px 0px 0px 0px",
              width: "450px",
            }}
          ></input>
                    <div
            style={{
              float: "left",
              backgroundColor: "#febd69",
              height: "34px",
              marginTop: "13px",
              width: "50px",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
          >

              <SearchIcon
                style={{ padding:"4px 0px 0px 10px", fontSize:"27px", fontWeight: "bolder"}}
              ></SearchIcon>
          
          </div>
        </div>
      </div>
    </div>
  );
}
