import { Injectable } from '@angular/core';
import {Client} from '../client/client';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MediaPlannerService {

	private clientApi = 'api/clients';
	private countryApi = 'api/countries';
  constructor(private http: HttpClient) { }

	getClients() :  Observable<Client[]>{
		return this.http.get<Client[]>(this.clientApi)
			.pipe(
				catchError(this.handleError<Client[]>('getClients',[]))
			);
	}

	getCountries() :  Observable<Country[]>{
		return this.http.get<Country[]>(this.countryApi)
			.pipe(
				catchError(this.handleError<Country[]>('getClients',[]))
			);
	}

	private handleError<T> (operation='operation',result?:T){
		return (error:any):Observable<T> =>{
			console.error(error);
			return null;
		}
	}
}
