import { Injectable } from '@angular/core';
import {Ad} from '../ad';
import {Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdService {

		private api = 'http://localhost:37322/api/ad/save';
  constructor(private http: HttpClient) { }

	createAd(ad:Ad) : Observable<Ad>{
		return this.http.post<Ad>(this.api,ad,httpOptions)
			.pipe(
				map(response=>{
					console.log(response);
					return response;
				})
			);
	}
}
