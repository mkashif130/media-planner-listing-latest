import {Client} from '../client/client';
import {Country} from '../country/country';
import {Supplier} from '../supplier/supplier'

export class Ad{
	Id:number;
	mediaId:number;
	supplierId:number;
	fromDate: Date;
	toDate: Date;
	budget: number
}


export class Campaign{
	id:number;
	client:Client;
	country:Country;
	suppliers:Supplier[];
	campaignBudget:number;
	fromDate:Date;
	toDate:Date;
	ads:Ad[]
}
