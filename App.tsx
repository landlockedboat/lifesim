import * as React from 'react';

import { Avatar, Button, Card, Col, Container, NextUIProvider, Row, Spacer, Text } from '@nextui-org/react';

import { LifeEventBoard } from './src/LifeEventBoard';
import { useState } from 'react';

import './App.css'


export default function App() {

  const [age, setAge] = useState(0);


  const [lifeEvents, setLifeEvents] = useState([]);

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
      <Container>
        <Spacer y={.5} />

        <Row justify="flex-start" align="center">
          <Avatar
            size="lg"
            src="https://i.pinimg.com/564x/31/31/16/313116194ee3e0e33ce059d855cdb559.jpg"
            color="primary"
            bordered
          />
          <Spacer x={.5} />
          <div>
          <Text style={{margin: 0}} h5>Wednesday Addams</Text>
          <Text>Age: {age}</Text>
          </div>
        </Row>

      </Container>

      <LifeEventBoard lifeEvents={lifeEvents} />
      <Container>
        <Spacer y={1} />
        <Row justify="center" align="center">
          <Button size="md" onClick={(e) => ageUp()}>➕ Age</Button>
        </Row>
      </Container>
    </NextUIProvider>
  );
}
