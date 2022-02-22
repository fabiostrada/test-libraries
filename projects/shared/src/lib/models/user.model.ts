import { Base } from "./base.model";

export class User implements Base {

    public id!: number;
    public name!: string;
    public email!: string;
    public gender!: string;
    public status!: string;

}
