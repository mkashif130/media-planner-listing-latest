import {Client} from '../client/client';
import {Country} from '../country/country';
import {Supplier} from '../supplier/supplier'
import {MediaChannel} from '../../../media-channel/mediaChannel';
export class Ad{
	Id:number;
	mediaId:number;
	supplier:Supplier;
	fromDate: Date;
	toDate: Date;
	budget: number;
	remainingBudget:number;
	campaign:Campaign;
	adTitle:string;
	mediaChannel:MediaChannel;
}


export class Campaign{
	id:number;
	client:Client;
	country:Country;
	suppliers:Supplier[];
	campaignBudget:number;
	remainingBudget: number;
	fromDate:Date;
	toDate:Date;
	ads:Ad[]
}
