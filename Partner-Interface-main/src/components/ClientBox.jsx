import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

import logo from "../Images/logo192.png";

const ClientBox = ({
  first_name,
  last_name,
  designation,
  email,
  mobile_no,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      className="Box"
      style={{
        color: "#000",
        margin: "auto",
        border: "2px solid #808080",
        borderRadius: "3px",
      }}
    >
      <div
        className="Upper"
        style={{
          backgroundColor: "#b5a5a5",
          paddingTop: "10px",
          verticalAlign: "middle",
        }}
      >
        <p className="d-flex mt-0">
          <div className="Head">
            <b className="mr-0" style={{ color: "#808080" }}>
              {designation}
            </b>
            <br />
            <b className="head2" style={{ color: "#000" }}>
              hSenid Business
            </b>
          </div>
          <div
            className="Notify"
            style={{
              fontSize: "12px",
              paddingTop: "12px",
              verticalAlign: "middle",
              marginLeft: "50px",
            }}
          >
            <a
              href="#"
              className="notification"
              style={{
                backgroundColor: "#1ab394",
                color: "#fff",
                textDecoration: "none",
                padding: "5px 16px",
                position: "relative",
                borderRadius: "3px",
              }}
            >
              <span>Notify</span>
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  padding: "2px 7px",
                  borderRadius: "50%",
                  backgroundColor: "#ff0000",
                  color: "#fff",
                }}
              >
                3
              </span>
            </a>
          </div>
        </p>
      </div>
      <div
        className="Middle"
        style={{ backgroundColor: "#f5f5f5", marginTop: "-13.326px" }}
      >
        <div>
          <img
            className="IMG"
            src={logo}
            alt="Photo"
            width="30"
            height="30"
          ></img>
          <b className="Client" style={{ color: "#808080" }}>
            Client Profile Details
          </b>
        </div>
        <br />
        <div className="Content" style={{ color: "#808080" }}>
          Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          {first_name} {last_name}
          <br />
          Designation :{designation}
          <br />
          Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          {email}
          <br />
          Tel.No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{mobile_no}
          <br />
          More details : <a href="https://www.w3schools.com/">View Client</a>
        </div>
      </div>
      <div className="Bottom" style={{ backgroundColor: "#f5f5f5" }}>
        <button
          className="ViewButton"
          style={{
            color: "#fff",
            backgroundColor: "#1ab394",
            borderColor: "transparent",
            width: "100%",
          }}
        >
          View Dashbord
        </button>
      </div>
    </div>
  );
};

export default ClientBox;
