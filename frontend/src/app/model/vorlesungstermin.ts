
import { Veranstaltung } from './veranstaltung';

export class Vorlesungstermin {
    constructor(id: number, anfangszeit, datum, endezeit, veranstaltung: Veranstaltung){

    }

    id: number;
    anfangszeit;
    datum: Date;
    endezeit;
    veranstaltung: Veranstaltung;
}