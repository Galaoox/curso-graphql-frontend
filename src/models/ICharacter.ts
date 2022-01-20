import { IGame } from "./IGame";

export interface ICharacter {
    _id: string;
    name: string;
    age: number;
    gender: string;
    games: IGame[];
    image:string
}