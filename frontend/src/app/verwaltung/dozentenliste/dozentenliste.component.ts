import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dozentenliste',
  templateUrl: './dozentenliste.component.html',
  styleUrls: ['./dozentenliste.component.scss']
})
export class DozentenlisteComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user: User){
    this.userService.delete(user.id);
  }

  openUpdateDozent(user: User){
    /* Mockdaten zum Testen der Schnittstelle
    const testuser = new User(5, null, null, null, null, null, null);
    this.userService.update(testuser)
  */
  }
}
