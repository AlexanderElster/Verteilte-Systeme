import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { Kurs } from 'src/app/model/kurs';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';

@Component({
  selector: 'app-neukurs',
  templateUrl: './neukurs.component.html',
  styleUrls: ['./neukurs.component.scss']
})
export class NeukursComponent implements OnInit {

  kurs : Kurs;
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private kursService: KursServiceService,
    private userService: UserServiceService,
    private loginService: AuthentifizierungService) {
      this.kurs = new Kurs(null, null, null, null, null)
     }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
  });

  if(!this.loginService.istUserEingeloggt()) {
    this.router.navigate(['/login'])
  }

}

  onSubmit() {
    this.kursService.save(this.kurs).subscribe(result => this.gotoKursliste());
  }

  gotoKursliste() {
    this.router.navigate(['/kursliste']);
  }

}
