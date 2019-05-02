import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Country} from './country/country';
import {Client} from './client/client';
import {Campaign} from './media-planner/ad'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

	createDb(){
		const countries = [
			{isoCode:"UAE",name:"United Arab Emirates"},
			{isoCode:"KSA",name:"Kingdom of Suadi Arabia"},
			{isoCode:"QAT",name:"QATAR"},
			{isoCode:"Pk", name:"Pakistan"}
		];

		const clients=[
			{id:1,name:"TTC One Media com"},
			{id:2,name:"TTC Two Media com"},
			{id:3,name:"TTC Three Media com"},
			{id:4,name:"TTC Four Media com"},
		];
		const suppliers=[
			{id:1,name:"Facebook",mcId:1},
			{id:2,name:"Twitter", mcId:1},
			{id:3,name:"TV", mcId:2},
			{id:4,name:"Billboards", mcId:2},
		];

		const mediaChannels=[
			{id:1,name:"Social"},
			{id:2,name:"Offline"},
		];

		let campaign = [];

		return {countries,clients,suppliers,mediaChannels, campaign};
	}

	genId(countries: Country[]):number{
		return countries.length+1;
	}
}
