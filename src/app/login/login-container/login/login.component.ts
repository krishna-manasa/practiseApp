import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() childVar: string;

  @Output()  sendToParent = new EventEmitter();

  public  testOne: string;

  constructor(private authService:AuthService) { }

  ngOnInit() {

    this.testOne = 'Krishnaaaa';
  }

  chageChildValue($event: any) {
    console.log($event);
    this.sendToParent.emit(this.testOne);

  }

  redirectToHome($event: MouseEvent) {
    this.authService.getLoggedIn(this.testOne);

  }
}
