import { IAddress } from "./address";

export interface IUser{
    nom: string;
    prenom: string;
    adresse: IAddress;
}