import { Injectable } from '@angular/core';
import {Client} from '../client/client';
import {Country} from '../country/country';
import {MediaChannel} from '../media-channel/mediaChannel';
import {Supplier} from '../supplier/supplier';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MediaPlannerService {

	private clientApi = 'http://localhost:37322/api/client/get';
	private countryApi = 'http://localhost:37322/api/country/get';
	private mediaChannelApi = 'http://localhost:37322/api/mediachannel/get';
	private supplierApi = 'http://localhost:37322/api/supplier/get';
	private supplierByMCIDApi = 'http://localhost:37322/api/supplier/getbymcid/';
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

	getMediaChannels() :  Observable<MediaChannel[]>{
		return this.http.get<MediaChannel[]>(this.mediaChannelApi)
			.pipe(
				catchError(this.handleError<MediaChannel[]>('getMediaChannels',[]))
			);
	}

	getSuppliers(id: number) :  Observable<Supplier[]>{
		const url = `${this.supplierByMCIDApi}${id}`;
		return this.http.get<Supplier[]>(url)
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
