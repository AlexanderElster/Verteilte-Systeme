import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentifizierungService {

  constructor() { }

  authentifizieren(user: User) {
    if (user.id != 0) {
      sessionStorage.setItem('uid', user.id.toString())
      if (user.admin) {
        sessionStorage.setItem('admin', '1')
      }
      else {
        sessionStorage.setItem('admin', '0')
      }
      return true;
    }
    else {
      return false;
    }
  }

  istUserEingeloggt() {
    let uid = sessionStorage.getItem('uid')
    if (uid === null) {
      return false
    }
    else {
      return true
    }
  }

  istUserAdmin() {
    let admin = sessionStorage.getItem('admin')
    if (admin === '1') {
      return true
    }
    else {
      return false;
    }
  }

  logOut() {
    sessionStorage.removeItem('uid')
    window.location.reload()
  }
}
