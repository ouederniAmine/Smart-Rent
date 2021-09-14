import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-property-infos',
  templateUrl: './property-infos.component.html',
  styleUrls: ['./property-infos.component.css']
})
export class PropertyInfosComponent implements OnInit {
  data : any[];
  constructor(public _crudService: CrudService) { }
  selectionPlatform = [{reservationRequester : "amin" , reservationDate : "20/20/2020" , reservationRequestDate: "19/20/2020"},{reservationRequester : "amin" , reservationDate : "20/20/2020" , reservationRequestDate: "19/20/2020"},{reservationRequester : "amin" , reservationDate : "20/20/2020" , reservationRequestDate: "19/20/2020"}];

  ngOnInit(): void {
    this._crudService.getAllProperties().subscribe(
      res => {
        console.log(res);
        this.data = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
