import React, { useContext } from "react";
import { AppContext } from '../store/store';

const Result = () => {
  const { state } = useContext(AppContext);
  return <div className="result">{state.result}</div>;
};

export default Result;
