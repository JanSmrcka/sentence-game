import React from "react";
import { Link } from "react-router-dom";

import SentenceList from "./SenctenceList";

const Home = () => {
  return (
    <div>
      <h3 className="ui center aligned header">List of Sentences:</h3>
      <SentenceList></SentenceList>
      <div className="ui center aligned">
        <Link to="/MainForm">
          <button className="fluid ui button primary">New Sentence</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
