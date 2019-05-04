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

	private getApiSingle ='http://localhost:37322/api/campaign/get/';
private getApi ='http://localhost:37322/api/campaign/get';
	private api = 'http://localhost:37322/api/campaign/savecampaign';
  constructor(private http: HttpClient) { }

getCampaign(id) : Observable<Campaign>{
		const url = `${this.getApiSingle}${id}`;
		return this.http.get<Campaign>(url)
			.pipe(
				map(response=>{
					console.log(response);
					return response;
				})
			);
}
	getCampaigns() :  Observable<Campaign[]>{
		return this.http.get<Campaign[]>(this.getApi)
			.pipe(
				map(response=> {
					console.log(response);
						return response;
				}),
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
