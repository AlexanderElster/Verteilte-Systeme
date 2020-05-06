import { Kurs } from './kurs';
import { User } from './user';

export class Veranstaltung {
    constructor(id: number, bezeichnung: string, anztermine: number ,kurs: Kurs, dozent: User){

    }

    id: number;
    bezeichnung: string;
    anztermine: number;
    kursId: number;
    kurs: Kurs;
    dozentId: number;
    dozent: User;

}