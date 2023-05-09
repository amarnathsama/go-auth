import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatHome from "../components/chatBoard/ChatHome";
const Home = (props: { username: string }) => {
  if (props.username == "") {
    // console.log(props.username);
    return <div>{"please log in firstttt"}</div>;
  } else return <ChatHome username={props.username} />;
};
export default Home;
