import { Component, OnInit } from '@angular/core';
import {Campaign} from '../ad';
import {CampaignService} from '../campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
displayedColumns: string[] = ['id','client','country', 'budget', 'fromDate', 'toDate'];
	campaigns : Campaign[];

  constructor(private campaignService : CampaignService) {

	}

  ngOnInit() {
			this.getCampaigns();
  }

getCampaigns() : void {
	this.campaignService.getCampaigns().subscribe(cam=>this.campaigns=cam);
}
}
