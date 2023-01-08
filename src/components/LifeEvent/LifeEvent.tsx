import * as React from 'react';
import { Badge, Card, Col, Row, Spacer, Text } from '@nextui-org/react';
import { ILifeEvent } from './LifeEvent.types';


interface IProps {
    lifeEvent: ILifeEvent;
}

const LifeEventBody = ({ lifeEvent }: IProps) => {

    return (<Card variant='bordered'>
        <Card.Body>
            <Text>
                {lifeEvent.description}
            </Text>
        </Card.Body>
    </Card>)

}

export const LifeEvent = ({ lifeEvent }: IProps) => {
    return (
        <>
            <Row gap={1}>
                <Col>
                    {lifeEvent.effect ?
                        <Badge color={lifeEvent.effect.color} content={lifeEvent.effect.content} size="lg">
                            <LifeEventBody lifeEvent={lifeEvent} />
                        </Badge> :
                        <LifeEventBody lifeEvent={lifeEvent} />
                    }
                </Col>
            </Row>
            <Spacer y={1} />
        </>)
}