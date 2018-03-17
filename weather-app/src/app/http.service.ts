import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getSanjoseData(){
  	console.log("Got to service")
  	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5391959&APPID=9a6bfa363e954f9c2f9134dfd665b99c')
  }
  getSeattleData(){
  	console.log("Got to service")
  	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5809844&APPID=9a6bfa363e954f9c2f9134dfd665b99c')
  }
  getBurbankData(){
  	console.log("Got to service")
  	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5331835&APPID=9a6bfa363e954f9c2f9134dfd665b99c')
  }
  getDallasData(){
  	console.log("Got to service")
  	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4684888&APPID=9a6bfa363e954f9c2f9134dfd665b99c')
  }
  getDcData(){
  	console.log("Got to service")
  	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4366164&APPID=9a6bfa363e954f9c2f9134dfd665b99c')
  }
  getChicagoData(){
  	console.log("Got to service")
  	return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=4887398&APPID=9a6bfa363e954f9c2f9134dfd665b99c')
  }
}
