import { IDeveloper } from "./IDeveloper";

export interface IGame {
    _id: string;
    title: string;
    cover: string;
    developers: IDeveloper[]
}