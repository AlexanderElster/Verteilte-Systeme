import { Veranstaltung } from './veranstaltung';

export class Vorlesungstermin {
    constructor(id: number, anfangszeit: string, datum: string, endezeit: string, veranstaltungsId : number ,veranstaltung: Veranstaltung){

    }

    id: number;
    anfangszeit: string;
    datum: string;
    endezeit: string;
    veranstaltungsId : number;
    veranstaltung: Veranstaltung;

    getID(){
        return this.id;
    }
}