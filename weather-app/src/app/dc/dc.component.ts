import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weatherData: any
  constructor(
    private _httpService: HttpService,
  ) {
    this.weatherData = {humidity: 0, temp: 0, temp_min:0, temp_max:0, description:""}
  }
  ngOnInit() {
    
    this._httpService.getDcData().subscribe(data=>{
      console.log(data)
      this.weatherData.humidity = data['list'][data['list'].length-1]['main']['humidity']
      this.weatherData.temp = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp'])-273)+32)
      this.weatherData.temp_min = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_min'])-273)+32)
      this.weatherData.temp_max = Math.floor((9/5)*((data['list'][data['list'].length-1]['main']['temp_max'])-273)+32)
      this.weatherData.description = data['list'][data['list'].length-1]['weather'][0]['description']
    })
  }
}