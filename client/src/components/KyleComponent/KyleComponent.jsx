import React from "react";
import { Link } from "react-router-dom";
import "../KyleComponent/KyleComponent.css";

function KyleComponent(props) {
  return (
    <Link to="/kyle">
      <div className="kyle-component">
        <h3>Hello World!</h3>
      </div>
    </Link>
  );
}

export default KyleComponent;
