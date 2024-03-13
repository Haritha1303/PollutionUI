import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PollutionData } from './PollutionData';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {



  private url = 'http://localhost:8095/pollution/viewPollutionData';

  constructor(private httpClient: HttpClient) { }
    viewPollutionData():Observable<PollutionData[]>{
      return this.httpClient.get<PollutionData[]>(this.url);
    }
  
}
