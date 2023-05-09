import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../static";
const Channels = (props: { username: string }) => {
  // console.log(props);
  axios
    .post("http://localhost:8000/api/channels")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>{"What a wow " + props.username + " u reached channels"}</div>;
};
export default Channels;
