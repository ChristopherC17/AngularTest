import { Component } from "@angular/core";
import { IUser } from "./user";


@Component({
    selector: 'pm-users',
    templateUrl: './user-list.component.html'
})


export class UserListComponent{

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value; 
        this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    }

    filteredUsers: IUser[]
    users: IUser[] = [
        {
            "nom": "Nom_1",
            "prenom":"Prenom_2",
            "adresse": {
                "address":"Boulevard de Stalingrad",
                "complement":"162",
                "codePostal":"94200"
                }
        },
        {
            "nom": "Nom_2",
            "prenom":"Prenom_2",
            "adresse": {
                "address":"Boulevard de Stalingrad",
                "complement":"162",
                "codePostal":"94200"
                }
        },
        {
            "nom": "Nom_3",
            "prenom":"Prenom_3",
            "adresse": {
                "address":"Les camps sarrats",
                "complement":"Lotissement",
                "codePostal":"12740"
                }
        },
        {
            "nom": "Nom_4",
            "prenom":"Prenom_4",
            "adresse": {
                "address":"Marseille",
                "complement":"Lotissement",
                "codePostal":"13000"
                }
        }
    ]


    constructor(){
        this.filteredUsers = this.users;
        this.listFilter = ''
    }


    performFilter(filterBy: string): IUser[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.users.filter((user : IUser) => user.adresse.codePostal.toLocaleLowerCase().indexOf(filterBy) == 0);
    }
}