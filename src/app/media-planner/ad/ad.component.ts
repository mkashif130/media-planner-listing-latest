import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Ad,Campaign} from '../ad'
import {MediaPlannerService} from '../mediaplanner.service'
import {CampaignService} from '../campaign.service';
import {Supplier} from '../../supplier/supplier';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {AdService} from './ad.service'

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent  {

	campaign: Campaign;
	campaignId:number;
	suppliers : Supplier[];
	selectedSupplier : Supplier;
	ad: Ad;
	adTitle:string;
	success:boolean;
	constructor(private campaignService: CampaignService,
		private mediaplannerService: MediaPlannerService,
		private adService: AdService,
	    public dialogRef: MatDialogRef<AdComponent>,
	    @Inject(MAT_DIALOG_DATA) public data: number) {

				console.log(data);
				this.campaignId= data;
			}

	  onNoClick(): void {
	    this.dialogRef.close();
	  }
		ngOnInit(){
			this.getCampaign(this.campaignId);
			this.ad= new Ad();
			this.ad.budget=0.0;
		}

		addFromDateForAd(event: MatDatepickerInputEvent<Date>) {
				console.log(this.ad);
	 			this.ad.fromDate = event.value;
	 			 console.log(this.ad);
	  }

	  addToDateForAd(event: MatDatepickerInputEvent<Date>) {

 		 	 			 this.ad.toDate = event.value;
 		 	 			 console.log(this.ad);
	  }
		onSupplierChange(event){
		var sup=	this.suppliers.find(function(e){
				return e.name==event.value;
			});
			this.ad.supplier = sup;
			console.log(this.ad);
		}


		SaveAd(){
			var ad =this.ad;
			if(ad.fromDate < new Date(this.campaign.fromDate) || ad.fromDate >  new Date(this.campaign.toDate)){
					alert("From data must be withing the range of campaign date.");
					return;
			}
			else	if(ad.toDate < new Date(this.campaign.fromDate) || ad.toDate >  new Date(this.campaign.toDate)){
						alert("To data must be withing the range of campaign date.");
						return;
				}
				else if( this.campaign.remainingBudget - this.ad.budget  < 0 ){
					alert("Budget Exceeded.");
					return;
				}
				ad.campaign = this.campaign;
				ad.adTitle=this.adTitle;
				this.adService.createAd(ad).subscribe(resp=>{
					console.log(resp);
					this.success=true;
				});
		}

		getCampaign(id) : void{
			this.campaignService.getCampaign(id).subscribe(resp=>{
				this.campaign=resp[0];

				this.getSuppliersByMcId();
			});
		}

		getSuppliersByMcId() : void{
			this.mediaplannerService.getSuppliers(this.campaign.id).subscribe(resp=>{
				this.suppliers=resp;
				console.log(this.suppliers);
			});
		}
}
