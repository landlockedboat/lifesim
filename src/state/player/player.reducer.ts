import { IPlayerAction, PLAYER_ACTIONS } from "./player.actions";
import { IPlayerState } from "./player.state";

export const playerReducer = (state: IPlayerState, action: IPlayerAction) => {

    switch (action.type) {
        case PLAYER_ACTIONS.AGE_UP:
            return {...state, age: state.age + 1};
        case PLAYER_ACTIONS.AGE_DOWN:
            return {...state, age: state.age - 1};
    }

}