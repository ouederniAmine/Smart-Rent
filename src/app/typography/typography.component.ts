import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})



export class TypographyComponent implements OnInit {

  controlFile = new FormControl();
  config = {
    directory: `path/to/upload/to`,
    firebaseConfig: environment.firebaseConfig,
  };
  constructor() { }

  ngOnInit() {
  }

}
