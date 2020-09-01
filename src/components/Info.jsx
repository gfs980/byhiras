import React, { useContext } from "react";
import { AppContext } from "../store/store";

const Info = () => {
  const { state } = useContext(AppContext);
  switch (state.status) {
    case 1:
      return (
        <div className="Status">
          <h3 className="win">You Win</h3>
        </div>
      );
    case -1:
      return (
        <div className="Status">
          <h3 className="lost">Game Over</h3>
        </div>
      );
    default:
      return null;
  }
};

export default Info;
