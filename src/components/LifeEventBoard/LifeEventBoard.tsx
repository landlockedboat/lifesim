import * as React from 'react';
import { Container, Spacer } from '@nextui-org/react';
import { ILifeEvent, LifeEvent } from '../LifeEvent';

interface IProps {
    lifeEvents: ILifeEvent[];
}

export const LifeEventBoard = ({ lifeEvents }: IProps) => {

    return (<Container gap={2} style={{ overflowY: "auto", overflowX: "hidden", height: "60vh" }}>
        <Spacer y={1} />
        {lifeEvents.map((e) =>
            (<LifeEvent lifeEvent={e} />)
        )}
    </Container>)
}