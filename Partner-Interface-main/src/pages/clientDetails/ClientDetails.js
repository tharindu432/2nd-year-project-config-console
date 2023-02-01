import React, { useState, Component } from "react";

import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { tokens } from "../../theme";
import { ApiPath } from "../../API/ApiPath";

import Header from "../../components/Header";
import ClientBox from "../../components/ClientBox";

import "./index.css";
import logo from "../../Images/logo192.png";

class ClientDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
    };
  }

  componentDidMount() {
    fetch(
      ApiPath.API_URL +
        "ClientDetail/ClientDetails?partnerId=" +
        this.state.va[2]
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          clients: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, clients } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {clients.map((client) => (
          <ol key={client.client_id}>
            First Name: {client.first_name}, Last Name: {client.last_name},
            Mobile No: {client.mobile_no}, Email: {client.email}, Designation:{" "}
            {client.designation},
          </ol>
        ))}
      </div>
    );
  }

  // refreshList() {
  //   fetch(ApiPath.API_URL + "ClientDetail/ClientDetails?partnerId=" + va[2])
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ clients: data });
  //     });
  // }

  // render() {
  //   return (
  //     <Box m="20px">
  //       {/* HEADER */}
  //       <h1 className="header1" onClick={refreshList()}>
  //         CLIENT DETAILS {va[2]}
  //         {console.log(clients[0].first_name)}
  //       </h1>
  //       <div>
  //         <div className="secondbackground">
  //           <div className="Row">
  //             <ClientBox />
  //             <ClientBox />
  //             <ClientBox />
  //           </div>
  //         </div>
  //       </div>
  //     </Box>
  //   );
  // }
}

export default ClientDetails;

// const Dashboard = () => {
//   const theme = useTheme();
//   const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
//   const colors = tokens(theme.palette.mode);

//   const [va, setVal] = useState(window.location.pathname.split("/"));

//   const [clients, setClients] = useState("");

//   const refreshList = () => {
//     fetch(ApiPath.API_URL + "ClientDetail/ClientDetails?partnerId=" + va[2])
//       .then((response) => response.json())
//       .then((data) => {
//         setClients(data);
//         console.log(data);
//       });
//   };

//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <h1 className="header1" onClick={refreshList}>
//         CLIENT DETAILS {va[2]}
//         {console.log(clients[0].first_name)}
//       </h1>
//       <div>
//         <div className="secondbackground">
//           <div className="Row">
//             <ClientBox />
//             <ClientBox />
//             <ClientBox />
//           </div>
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default Dashboard;
