import { User } from './user';
import { Veranstaltung } from './veranstaltung';

export class Kurs {
  [x: string]: any;

    constructor(id: number, kursbezeichnung: string, studleiterId: number, studleiter: User, veranstaltungen: Veranstaltung[]){
    }

        id: number;
        kursbezeichnung: string;
        studleiterId: number;
        studleiter: User;
        veranstaltungen: Veranstaltung[];
        
}