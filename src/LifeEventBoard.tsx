import * as React from 'react';
import { Container, Spacer } from '@nextui-org/react';

import { LifeEvent } from './LifeEvent';

export const LifeEventBoard = ({lifeEvents}) => {

    return (<Container gap={2} style={{ overflowY: "auto", overflowX: "hidden", height: "80vh" }}>
        <Spacer y={1} />
        {lifeEvents.map((e) =>
            (<LifeEvent lifeEvent={e} />)
        )}
    </Container>)
}