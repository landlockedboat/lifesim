import * as React from 'react';
import { Badge, Card, Col, Row, Spacer, Text } from '@nextui-org/react';

const LifeEventBody = ({ lifeEvent }) => {

    return (<Card variant='bordered'>
        <Card.Body>
            <Text>
                {lifeEvent.description}
            </Text>
        </Card.Body>
    </Card>)

}

export const LifeEvent = ({ lifeEvent }) => {
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