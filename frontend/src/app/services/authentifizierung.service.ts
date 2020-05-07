import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentifizierungService {

  constructor() { }

  authentifizieren(user: User) {
    if (user.id != null) {
      sessionStorage.setItem('uid', user.id.toString())
      return true;
    }
    else {
      return false;
    }
  }

  istUserEingeloggt() {
    let uid = sessionStorage.getItem('uid')
    if (uid === 'null') {
      return false
    }
    else {
      return true
    }
  }

  logOut() {
    sessionStorage.removeItem('uid')
  }
}
