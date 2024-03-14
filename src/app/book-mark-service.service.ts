import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PollutionData } from './PollutionData';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookMarkServiceService {

  constructor(private http:HttpClient) { }

  bookmarkData(data:any)
  {
    return this.http.post<any>('http://localhost:8098/bookMark/wishlist',data);
  }


  viewbookMarkData():Observable<PollutionData[]>{
    return this.http.get<PollutionData[]>('http://localhost:8098/bookMark/viewfavourite');
  }


}
