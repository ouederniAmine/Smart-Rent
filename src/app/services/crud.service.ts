import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private db: AngularFireDatabase) { }
  
  //read data from client (auth)
  
  /**
   * @TODO:
   * function get all proprities
   */
  getAllProperties() {
    return this.db.list('/properties').valueChanges();
  }
  getAllReservations() {
    return this.db.list('/properties').valueChanges();
  }
  /**
   * 
   * @TODO:
   * function get property by id
   * @param id: string
   */
  getPropertyById(id: string) {
    return this.db.object('/properties/' + id).valueChanges();
  }

  /**
   * @TODO:
   * function get realtime property iot details by id
   * @param id: string
   */
getPropertyIotDetailsById(id: string) {
  return this.db.object('/properties/' + id + '/iot').valueChanges();
}

  /**
   * @TODO:
   * function update user
   * @param user
   */
  updateProperty(property) {
    this.db.list('/properties').update(property.id, property);
  }
  addProperty(property) {
    this.db.list('/properties').push(  property );
  }
/**
   * @TODO:
   * function get realtime property 
   * @param id: string
   */

  getPropertyReservationsDetailsById(id: string) : Observable<any> {
    return this.db.list('properties').valueChanges();
  }
  //write data in property (property name , property address , property description , property imgs , property night price , property day price , property owner , property owner phone )
 //create a new property listing (property name , property address , property description , property imgs , property night price , property day price , property owner , property owner phone )
  //create a new client (name , email ,  phone , address , aboutme , image , password)
  //delete a property listing
  //dzlete a client

  

}
