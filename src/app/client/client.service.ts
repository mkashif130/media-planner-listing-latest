import { Injectable } from '@angular/core';
import {Client} from './client';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

	private api = 'http://localhost:37322/api/client/get';
  constructor(private http: HttpClient) { }

	getClients() :  Observable<Client[]>{
		return this.http.get<Client[]>(this.api)
			.pipe(
				map(response=> {
						return response;
				}),
				catchError(this.handleError<Client[]>('getClients',[]))
			);
	}

	private handleError<T> (operation='operation',result?:T){
		return (error:any):Observable<T> =>{
			console.error(error);
			return null;
		}
	}
}
