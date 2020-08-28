import React from "react";
import PropTypes from "prop-types";
import "./Key.css";

function Key({ keyAction, keyType, keyValue }) {
  return (
    <div className="key-container">
      <p className="key-value">{keyValue}</p>
    </div>
  );
}

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

export default Key;
