import * as React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { useReducer, useState } from 'react';

import './App.css'
import { LifeEventBoard } from './src/components/LifeEventBoard';
import { ILifeEvent } from './src/components/LifeEvent';
import { Header } from './src/components/Header';
import { ActionBoard } from './src/components/ActionBoard';
import { initialPlayerState, playerReducer, PLAYER_ACTIONS } from './src/state/player';

export default function App() {

  const [lifeEvents, setLifeEvents] = useState<ILifeEvent[]>([]);
  const [playerState, playerDispatch] = useReducer(playerReducer, initialPlayerState);

  const ageUp = () => {
    playerDispatch({type: PLAYER_ACTIONS.AGE_UP})
    setLifeEvents([...lifeEvents, {
      description: "Your age: " + (playerState.age + 1),
      effect: { color: "success", content: "+1 Year" }
    }])
  }

  return (
    <NextUIProvider>
      <Header age={playerState.age} />
      <LifeEventBoard lifeEvents={lifeEvents} />
      <ActionBoard ageUp={ageUp} />
    </NextUIProvider>
  );
}
