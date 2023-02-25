import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get(`${environment.api_url}item`);
  }

  postFood(body: any)
  {
    return this.http.post(`${environment.api_url}item/create`,body).subscribe();
  }
}
