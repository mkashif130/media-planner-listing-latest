import { Injectable } from '@angular/core';
import {Country} from './country';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

	private api = 'api/countries';
  constructor(private http: HttpClient) { }

	getCountries() :  Observable<Country[]>{
		return this.http.get<Country[]>(this.api)
			.pipe(
				catchError(this.handleError<Country[]>('getCountries',[]))
			);
	}

	private handleError<T> (operation='operation',result?:T){
		return (error:any):Observable<T> =>{
			console.error(error);
			return null;
		}
	}
}
