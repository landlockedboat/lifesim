import * as React from 'react';

import { Button, Checkbox, Input, Modal, NextUIProvider, Row, Text } from '@nextui-org/react';
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

  const [visible, setVisible] = React.useState(true);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <NextUIProvider>
      <Header age={playerState.age} />
      <LifeEventBoard lifeEvents={lifeEvents} />
      <ActionBoard playerState={playerState} ageUp={ageUp} />
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        // style={{padding: "10vw"}}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} b>
            Do you want it?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: "flex", flexDirection: "column", "alignItems": "center"}}>
            <div style={{fontSize: "40px"}}>💊</div>
            <div style={{textAlign: "center"}}>Grandma is offering you some Oxycodine. Do you accept it?</div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            No
          </Button>
          <Button auto color="success" onPress={closeHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </NextUIProvider>
  );
}
