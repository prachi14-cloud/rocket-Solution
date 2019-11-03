import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LunchService {
  url: string = 'assets/sample.json'
  constructor(private http: HttpClient) { }

  getRestrauntDetails (){
    return this.http.get(this.url);
  }
}
