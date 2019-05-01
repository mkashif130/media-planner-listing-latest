import { Component, OnInit } from '@angular/core';
import {Client} from '../client/client';
import {Country} from '../country/country';
import {Supplier} from '../supplier/supplier';
import {MediaChannel} from '../media-channel/mediaChannel';
import {MediaPlannerService} from './mediaplanner.service';
import {CampaignService} from './campaign.service'
import {FormControl} from '@angular/forms';
import {Ad,Campaign} from './ad';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';
@Component({
  selector: 'app-media-planner',
  templateUrl: './media-planner.component.html',
  styleUrls: ['./media-planner.component.css']
})
export class MediaPlannerComponent implements OnInit {

	clients:Client[];
	coutnries:Country[];
	mediaChannels: MediaChannel[];
	suppliers: Supplier[];
	selectedItems: Supplier[];
	selectedSupplierInAd:Supplier;
	selectedClient:Client;
	selectedCountry : Country;
	myControl = new FormControl();
	campaignBudget: number;
	fromDate:Date;
	toDate:Date;
	campaign:Campaign;
	campaigns:Campaign[];
	ads:Ad[];
	campaignCreated:boolean = false;
	dirtyAd: boolean = false;
  constructor(private clientService: MediaPlannerService, private campaignService : CampaignService) {
		this.getClients();
	this.getCountries();
	this.getMediaChannels();
 }

  ngOnInit() {
			this.selectedItems = [];
			this.campaignBudget=0.0;
			this.ads=[];
  }
 OnClientSelected(e){
	 this.selectedClient =  e;
 }
 OnCountrySelected(e){
	 this.selectedCountry =  e;
 }

 addFromDate(type: string, event: MatDatepickerInputEvent<Date>) {
	 this.fromDate= event.value;
 }

 addToDate(type: string, event: MatDatepickerInputEvent<Date>) {
	this.toDate= event.value;
 }

 addFromDateForAd(ad, event: MatDatepickerInputEvent<Date>) {
	 this.ads.forEach((item,index)=>{
		 if(item===ad){
			 item.fromDate = event.value;
			 console.log(item);
		 }
	 });
 }

 addToDateForAd(ad, event: MatDatepickerInputEvent<Date>) {
	 this.ads.forEach((item,index)=>{
		 if(item===ad){
			 item.toDate = event.value;
			 console.log(item);
		 }
	 });
 }
onSupplierChange(ad,event){
	ad.supplierId = event.value;
}
SaveAd(ad){
console.log(ad);
	if(ad.fromDate < this.campaign.fromDate || ad.fromDate >  this.campaign.toDate){
			alert("From data must be withing the range of campaign date.");
			return;
	}
	else	if(ad.toDate < this.campaign.fromDate || ad.toDate >  this.campaign.toDate){
				alert("To data must be withing the range of campaign date.");
				return;
		}
		else if( this.ads.reduce((sum, item) => sum + item.budget, 0) > this.campaign.campaignBudget){
			alert("Budget Exceeded.");
			return;
		}
		if(!this.campaign.ads){
			this.campaign.ads=[];
		}
		this.campaign.ads.push(ad);

		this.campaignService.updateCampaign(this.campaign)
		.subscribe();
	console.log(ad);
}
 CreateCampaign(){
	 if(!this.selectedClient || !this.selectedCountry){
		 alert("Client and Country are required.");
		 return;
	 }
	 else if(this.selectedItems.length===0){
		 alert("Please select at least one Supplier");
		 return;
	 }
	 else if(this.campaignBudget<=0){
		 alert("Please enter valid campaign budget.");
		 return;
	 }
	 else if(!this.fromDate || this.fromDate== null || !this.toDate || !this.toDate== null){
		 alert("from  and To date is required.");
		 return;
	 }else if(this.toDate<this.fromDate){
		 alert("To Date should be greater than From date");
		 return;
	 }

	 this.campaign = new Campaign();
	 this.campaign.client = this.selectedClient;
	 this.campaign.country = this.selectedCountry;
	 this.campaign.suppliers = this.selectedItems;
	 this.campaign.campaignBudget= this.campaignBudget;
	 this.campaign.fromDate = this.fromDate;
	 this.campaign.toDate = this.toDate;
	 if(!this.campaigns){
		 this.campaigns=[];
	 }
	 this.campaign.id =  this.campaigns.length + 1;

	 this.campaignService.addCampaign(this.campaign)
	 	.subscribe(cam=>{
			if(!this.campaigns){
				this.campaigns=[];
			}

			this.campaigns.push(cam);
			this.campaignCreated = true;
		 console.log(this.campaigns);
		});

 }
	CreateEmptyAd(){
		this.dirtyAd = true;
		console.log("inside");
		let ad = new Ad();
		ad.Id=this.ads.length+1;
		this.ads.push(ad);

	}

	onSelection(e, v){
			if(e.option.selected===true){
    	this.selectedItems.push(e.option.value);}
			else{
					this.selectedItems.forEach((item,index)=>{
						if(item===e.option.value){
							this.selectedItems.splice(index,1);
						}
					});
			}
   }
LoadSuppliers(id:number):void{
	this.clientService.getSuppliers(id).subscribe(s=>this.suppliers=s);
}
	getClients() : void {
		this.clientService.getClients().subscribe(cl=>this.clients=cl);
	}
	getCountries() : void {
		this.clientService.getCountries().subscribe(c=>this.coutnries=c);
	}
	getMediaChannels() : void {
		this.clientService.getMediaChannels().subscribe(mc=>this.mediaChannels=mc);
	}
}
