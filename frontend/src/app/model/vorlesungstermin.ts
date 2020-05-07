
import { Veranstaltung } from './veranstaltung';

export class Vorlesungstermin {
    constructor(id: number, anfangszeit, datum, endezeit, veranstaltungsId : number ,veranstaltung: Veranstaltung){

    }

    id: number;
    anfangszeit;
    datum: Date;
    endezeit;
    veranstaltungsId : number;
    veranstaltung: Veranstaltung;
}