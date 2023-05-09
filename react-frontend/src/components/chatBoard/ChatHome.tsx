import React, { useEffect, useState } from "react";
import axios from "axios";
import Channels from "./Channels";
const ChatHome = (props: { username: string }) => {
  return <Channels username={props.username} />;
};
export default ChatHome;
