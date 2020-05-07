import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) { 
    this.user = new User(null, null, null, null, null, null, null, null, null);
  }
  
  
  
  ngOnInit() {
  }

  onLogin(){
    
  }
}
