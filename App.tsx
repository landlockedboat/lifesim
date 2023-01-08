import * as React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';

import './App.css'
import { LifeEventBoard } from './src/components/LifeEventBoard';
import { ILifeEvent } from './src/components/LifeEvent';
import { Header } from './src/components/Header';
import { ActionBoard } from './src/components/ActionBoard';

export default function App() {

  const [age, setAge] = useState(0);
  const [lifeEvents, setLifeEvents] = useState<ILifeEvent[]>([]);

  const ageUp = () => {
    const newAge = age + 1;
    setAge(newAge);
    setLifeEvents([...lifeEvents, {
      description: "Your age: " + newAge,
      effect: { color: "success", content: "+1 Year" }
    }])
  }

  return (
    <NextUIProvider>
      <Header age={age} />
      <LifeEventBoard lifeEvents={lifeEvents} />
      <ActionBoard ageUp={ageUp} />
    </NextUIProvider>
  );
}
