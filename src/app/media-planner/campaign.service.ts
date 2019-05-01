import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators'
import {Campaign} from './ad'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class CampaignService {

	private api = 'api/campaign';
  constructor(private http: HttpClient) { }

	getCampaigns() :  Observable<Campaign[]>{
		return this.http.get<Campaign[]>(this.api)
			.pipe(
				catchError(this.handleError<Campaign[]>('getCampaigns',[]))
			);
	}

	addCampaign(campaign:Campaign) : Observable<Campaign>{
		return this.http.post<Campaign>(this.api,campaign,httpOptions)
			.pipe(
				catchError(this.handleError<Campaign>('addCampaign'))
			);
	}

	updateCampaign(campaign:Campaign) : Observable<any>{
		return this.http.put(this.api,campaign,httpOptions)
			.pipe(
				catchError(this.handleError<any>('updateCampaign'))
			);
	}

	private handleError<T> (operation='operation',result?:T){
		return (error:any):Observable<T> =>{
			console.error(error);
			return null;
		}
	}
}
