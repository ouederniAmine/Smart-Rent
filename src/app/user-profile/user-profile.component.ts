import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor() { }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
   
      Cin: new FormControl(''),
      Email: new FormControl(''),
      adress: new FormControl(''),
  
    });
  ngOnInit() {
    
  }
  addProfile(){
    console.log(this.profileForm.value);
  }
}
