import React, { useContext } from "react";
import Character from "./Character";
import Dices from "./Dices";
import Attack from "./Attack";
import Result from "./Result";
import { AppContext } from '../store/store';

const Arena = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="arena">
      <div className="area_character">
        <Character name="Player" health={state.player.health} />
        <Dices dices={state.player.dices} />
      </div>

      <div className="area__mid">
        <Result />
        <Attack />
      </div>

      <div className="area_character">
        <Character name="Monster" health={state.monster.health} />
        <Dices dices={state.monster.dices} />
      </div>

    </div>
  );
};

export default Arena;
