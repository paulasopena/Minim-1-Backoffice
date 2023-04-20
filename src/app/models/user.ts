import { State } from "./state";
export interface User {
    _id?: any;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string; 
    state: string | State;
}