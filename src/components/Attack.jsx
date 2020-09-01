import React, { useContext } from "react";
import { AppContext } from '../store/store';

const Attack = () => {
  const { attack, state } = useContext(AppContext);
  return (
    <div className="attack">
      <button className="attack__btn" type="button" onClick={attack}>
        {state.status === 0 ? 'Attack!' : 'Restart Game'}
      </button>
    </div>
  );
};

export default Attack;
