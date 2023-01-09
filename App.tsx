import * as React from 'react';

import { Button, Modal, NextUIProvider, Text } from '@nextui-org/react';
import { useReducer, useState } from 'react';

import './App.css'
import { LifeEventBoard } from './src/components/LifeEventBoard';
import { ILifeEvent } from './src/components/LifeEvent';
import { Header } from './src/components/Header';
import { ActionBoard } from './src/components/ActionBoard';
import { initialPlayerState, playerReducer, PLAYER_ACTIONS } from './src/state/player';
import { DecisionModal, decisionModalInitialState, IDecisionModalState } from './src/components/DecisionModal';

export default function App() {

  const [lifeEvents, setLifeEvents] = useState<ILifeEvent[]>([]);
  const [modalState, setModalState] = useState<IDecisionModalState>(decisionModalInitialState);
  const [playerState, playerDispatch] = useReducer(playerReducer, initialPlayerState);

  const ageUp = () => {
    playerDispatch({ type: PLAYER_ACTIONS.AGE_UP })
    setLifeEvents([...lifeEvents, {
      description: "Your age: " + (playerState.age + 1),
      effect: { color: "success", content: "+1 Year" }
    }])
    setModalState(
      {
        visible: true,
        title: "Do you want some?",
        description: "Your stepfather offers you some Oxycodone. Do you accept?",
        emoji: "💊"
      }
    );
  }

  const closeHandler = () => {
    setModalState({...modalState, visible: false});
  };

  return (
    <NextUIProvider>
      <Header age={playerState.age} />
      <LifeEventBoard lifeEvents={lifeEvents} />
      <ActionBoard playerState={playerState} ageUp={ageUp} />
      <DecisionModal state={modalState} onClose={closeHandler} onConfirm={closeHandler} onReject={closeHandler} />
    </NextUIProvider>
  );
}
