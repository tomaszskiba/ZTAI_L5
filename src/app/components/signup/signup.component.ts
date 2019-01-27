import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {DataService} from "../../services/data-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

credentials = {
 name: '',
 email: '',
 password: '',
};

  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

create() {
this.authService.createOrUpdate(this.credentials).subscribe((result) => {
   return result;
 });
}

  ngOnInit() {
  }

}
