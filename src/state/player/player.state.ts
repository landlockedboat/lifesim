export interface IPlayerState {
    name: string,
    age: number,
    health: number,
    happiness: number,
    smarts: number,
    looks: number,
    money:number,
}

export const initialPlayerState: IPlayerState = {
    name: "John Doe",
    age: 0,
    health: 0,
    happiness: 0,
    smarts: 0,
    looks: 0,
    money: 0,
}