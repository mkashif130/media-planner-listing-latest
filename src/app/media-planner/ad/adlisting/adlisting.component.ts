import {Component, Inject,OnInit} from '@angular/core';
import {Ad,Campaign} from '../../ad'
import {MediaPlannerService} from '../../mediaplanner.service'
import {CampaignService} from '../../campaign.service';
import {Supplier} from '../../../supplier/supplier';
import {AdService} from '../ad.service'

@Component({
  selector: 'app-adlisting',
  templateUrl: './adlisting.component.html',
  styleUrls: ['./adlisting.component.css']
})
export class AdlistingComponent implements OnInit {

	ads:Ad[];
	campaigns:Campaign[];
	selectedCampaignId:number;
  constructor(private adService:AdService, private campaignService:CampaignService) { }

  ngOnInit() {
			this.getCampaigns();
  }

	onCampaignSelection(event){
		console.log(event);
		this.getAds(event.value);
	}
	getAds(id) : void{
		console.log(id);
		this.adService.getAdsByCampaign(id).subscribe(resp=>{
			this.ads=resp;
			console.log(this.ads);
		});
	}

	getCampaigns(): void{
		this.campaignService.getCampaigns().subscribe(resp=>{
			console.log("inside");
			console.log(resp);
			this.campaigns = resp;
			console.log(this.campaigns);
		});
	}
}
