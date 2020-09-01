import React, { useReducer } from "react";

const initialState = {
  player: { health: 100, dices: {} },
  monster: { health: 100, dices: {} },
  status: 0,
};

const AppContext = React.createContext({
  ...initialState,
  attack: () => {}
});


const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'INITIALIZE':
      return {...initialState}
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: payload
      }
    case 'CHANGE_RESULT':
      return {
        ...state,
        result: payload
      }
    case 'PLAYER_DAMAGE':
      return {
        ...state,
        player: {
          ...state.player,
          health: payload
        }
      }
    case 'MONSTER_DAMAGE':
      return {
        ...state,
        monster: {
          ...state.monster,
          health: payload
        }
      }
    case 'SET_PLAYER_DICES':
      return {
        ...state,
        player: { 
          ...state.player, 
          dices: {...payload}
        }
      }
    case 'SET_MONSTER_DICES':
      return {
        ...state,
        monster: { 
          ...state.monster, 
          dices: {...payload}
        }
      }
    
    default:
      return state;
  }
};




const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const monsterWon = () => {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: -1
    })
  }

  const playerWon = () => {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: 1
    })
  }

  const attackPlayer = (healthDamage) => {
    let playerHealth = state.player.health;
    playerHealth += healthDamage

    dispatch({
      type: 'PLAYER_DAMAGE',
      payload: playerHealth,
    })

    dispatch({
      type: 'CHANGE_RESULT',
      payload: 'Monster hits for ' + -healthDamage
    })

    if (playerHealth <= 0) {
      monsterWon()
    }
  }
  

  const attackMonster = (healthDamage) => {
    let monsterHealth = state.monster.health;
    monsterHealth -= healthDamage
    
    dispatch({
      type: 'MONSTER_DAMAGE',
      payload: monsterHealth
    })
    
    dispatch({
      type: 'CHANGE_RESULT',
      payload: 'You hit for ' + healthDamage
    })

    if (monsterHealth <= 0) {
      playerWon()
    }
  }

  const startNewGame = () => dispatch ({type: 'INITIALIZE'})

  const attack = () => {
    if (state.status !== 0) {
      // Game was played, restart the game
      return startNewGame()
    }
    // Roll the dices and Calculate the results
    const result = rollCharactersDices();

    if (result < 0) {
      // Negative result = monster wins
      attackPlayer(result)
    } 
    else if (result > 0) {
      // Positive result = player wins
      attackMonster(result)
    }
    else {
      dispatch({
        type: 'CHANGE_RESULT',
        payload: 'Draw !'
      })
    }
  }

  // Simulate dices roll
  const rollCharactersDices = () => {
    const playerDice1 = rollDice();
    const playerDice2 = rollDice();
    const monsterDice1 = rollDice();
    const monsterDice2 = rollDice();
    
    dispatch({
      type: 'SET_MONSTER_DICES',
      payload: { d1: monsterDice1, d2: monsterDice2 }
    })
    
    dispatch({
      type: 'SET_PLAYER_DICES',
      payload: { d1: playerDice1, d2: playerDice2 }
    })

    return playerDice1 + playerDice2 - monsterDice1 - monsterDice2;
  };

  // Simulate dice roll
  const rollDice = () => Math.floor(Math.random() * 6) + 1;
  
  return (
    <AppContext.Provider value={{ state, dispatch, attack }}>
        {children}
    </AppContext.Provider>
  );
}

export { AppContext, ContextProvider };
