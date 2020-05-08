import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentifizierungService } from 'src/app/services/authentifizierung.service';
import { VorlesungsterminService } from 'src/app/services/vorlesungstermin.service';

@Component({
  selector: 'app-terminloeschen',
  templateUrl: './terminloeschen.component.html',
  styleUrls: ['./terminloeschen.component.scss']
})
export class TerminloeschenComponent implements OnInit {

  vorlId: number;

  constructor(private router: Router, private loginService: AuthentifizierungService, private vorlesungsterminService: VorlesungsterminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.loginService.istUserEingeloggt()) {
      this.router.navigate(['/login'])
    }
  }

  onSubmit() {
    this.vorlesungsterminService.delete(this.vorlId).then((result) => this.goToKalender())
  }

  goToKalender() {
    this.router.navigate(['/kalender'])
  }
}
