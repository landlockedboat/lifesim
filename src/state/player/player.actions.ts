export interface IPlayerAction {
    type: string,
    payload?: string
}

export const PLAYER_ACTIONS = {
    AGE_UP: "age-up",
    AGE_DOWN: "age-down",
}