import { Kurs } from './kurs';
import { User } from './user';
import { Vorlesungstermin } from './vorlesungstermin';

export class Veranstaltung {
    constructor(id: number, bezeichnung: string, anztermine: number ,kurs: Kurs, dozent: User, vorlesungstermine: Vorlesungstermin[]){

    }

    id: number;
    bezeichnung: string;
    anztermine: number;
    kursId: number;
    kurs: Kurs;
    dozentId: number;
    dozent: User;
    vorlesungstermine: Vorlesungstermin[];
}