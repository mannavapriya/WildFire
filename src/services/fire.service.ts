import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireModel } from 'src/models/fire.model';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  public baseUrl = "https://localhost:7171/api/";
  constructor(private http : HttpClient)
  {

  }

  GetFires()
  {   
    let headers = new HttpHeaders();
    headers.append('responseType', 'json');
    return this.http.get<Array<FireModel>>(this.baseUrl + 'WildFires', {headers : headers});
  }

}
