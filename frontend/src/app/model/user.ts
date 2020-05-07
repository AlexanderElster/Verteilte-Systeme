import { Veranstaltung } from './veranstaltung';
import { Kurs } from './kurs';

export class User {
constructor(id: number, title: string, nachname: string, vorname: string, passwort: string, email: string, handynr: string, admin: boolean ,veranstaltungen: Veranstaltung[], kurse: Kurs[]){

}

    id: number;
    titel: string;
    nachname: string;
    vorname: string;
    passwort: string;
    email: string;
    handynr: string;
    admin: boolean;
    veranstaltungen: Veranstaltung[];
    kurse: Kurs[];
}
