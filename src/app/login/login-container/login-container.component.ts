import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  public test:string;
  public childVariableValue:string;



  constructor() { }

  ngOnInit() {
    this.test="Manasa";
  }


  changeTagValue($event: string) {
    console.log($event);
  }

  changeTagValues($event) {
    console.log($event);
    this.childVariableValue=$event;


  }
}
