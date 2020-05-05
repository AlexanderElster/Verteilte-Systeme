import { Component, OnInit } from '@angular/core';
import { Kurs } from 'src/app/model/kurs';
import { KursServiceService } from 'src/app/services/kurs-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kursliste',
  templateUrl: './kursliste.component.html',
  styleUrls: ['./kursliste.component.scss']
})
export class KurslisteComponent implements OnInit {

  kurse: Kurs[];

  constructor(private kursService: KursServiceService, private router: Router) { }

  ngOnInit(): void {
    this.kursService.findAll().subscribe(data => {
      this.kurse = data;
    });
  }

  deleteKurs(kurs: Kurs){
    this.kursService.delete(kurs.id);
    window.location.reload();
}

}
