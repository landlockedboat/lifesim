
import { Grid, Progress, Spacer } from '@nextui-org/react';
import { ActionButtons } from './ActionButtons';


const StatusBar = ({ emoji, name, value }) => {
  return (<>
    <Grid xs={4} style={{ justifyContent: "flex-end" }}>
      {name} {emoji}
    </Grid>
    <Grid xs={7}>
      <Progress color="primary" value={value} />
    </Grid>
    <Grid xs={1}>

    </Grid>
  </>)
}



export const ActionBoard = ({ playerState, ageUp }) => {

  return (<>
    <ActionButtons ageUp={ageUp}/>
    <Spacer y={.5} />
    <Grid.Container gap={.5} justify="center">
      <StatusBar emoji={"❤️"} name={"health"} value={playerState.health} />
      <StatusBar emoji={"😀"} name={"happiness"} value={playerState.happiness} />
      <StatusBar emoji={"🧠"} name={"brain"} value={playerState.brain} />
      <StatusBar emoji={"💅"} name={"looks"} value={playerState.looks} />
    </Grid.Container>
  </>)
}