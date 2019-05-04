import { Injectable } from '@angular/core';
import {MediaChannel} from './mediaChannel';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'
import {Supplier} from '../supplier/supplier';
@Injectable({
  providedIn: 'root'
})
export class MediaChannelService {

	private api = 'http://localhost:37322/api/mediachannel/get';
	private supApi='http://localhost:37322/api/supplier/getbymcid'

  constructor(private http: HttpClient) { }

	getMediaChannels() :  Observable<MediaChannel[]>{
		return this.http.get<MediaChannel[]>(this.api)
			.pipe(
				map(response=> {
						return response;
				}),
				catchError(this.handleError<MediaChannel[]>('getMediaChannels',[]))
			);
	}

	getSuppliersByMedia(mcId: number) :  Observable<Supplier[]>{
const url = `${this.supApi}/${mcId}`;
console.log(url);
		return this.http.get<Supplier[]>(url)
			.pipe(
				map(response=> {
						return response;
				}),
				catchError(this.handleError<Supplier[]>('getSuppliersByMedia',[]))
			);
	}


	private handleError<T> (operation='operation',result?:T){
		return (error:any):Observable<T> =>{
			console.error(error);
			return null;
		}
	}
}
