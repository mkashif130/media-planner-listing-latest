import { Injectable } from '@angular/core';
import {Supplier} from './supplier';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

	private api = 'api/suppliers';
  constructor(private http: HttpClient) { }

	getSuppliers() :  Observable<Supplier[]>{
		return this.http.get<Supplier[]>(this.api)
			.pipe(
				catchError(this.handleError<Supplier[]>('getSuppliers',[]))
			);
	}

	private handleError<T> (operation='operation',result?:T){
		return (error:any):Observable<T> =>{
			console.error(error);
			return null;
		}
	}
}
