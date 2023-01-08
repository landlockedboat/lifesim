import { Avatar, Container, Row, Spacer, Text } from '@nextui-org/react';

export const Header = ({ age }) => {
    return (<Container>
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
                <Text style={{ margin: 0 }} h5>Wednesday Addams</Text>
                <Text>Age: {age}</Text>
            </div>
        </Row>
    </Container>)
}