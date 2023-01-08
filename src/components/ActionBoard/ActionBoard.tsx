
import { Grid, Progress, Spacer } from '@nextui-org/react';
import { ActionButtons } from './ActionButtons';


const StatusBar = ({ emoji, name }) => {
  return (<>
    <Grid xs={4} style={{ justifyContent: "flex-end" }}>
      {name} {emoji}
    </Grid>
    <Grid xs={7}>
      <Progress color="primary" value={75} />
    </Grid>
    <Grid xs={1}>

    </Grid>
  </>)
}



export const ActionBoard = ({ ageUp }) => {

  return (<>
    <ActionButtons ageUp={ageUp}/>
    <Spacer y={.5} />
    <Grid.Container gap={.5} justify="center">
      <StatusBar emoji={"❤️"} name={"health"} />
      <StatusBar emoji={"😀"} name={"happiness"} />
      <StatusBar emoji={"🧠"} name={"brain"} />
      <StatusBar emoji={"💅"} name={"looks"} />
    </Grid.Container>
  </>)
}