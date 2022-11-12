import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = (props: { name: string }) => (
  <div>{props.name ? "Hi " + props.name : "please log in first"}</div>
);
export default Home;
