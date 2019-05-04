import { Component, OnInit,ViewChild  } from '@angular/core';
import {Ad,Campaign} from '../ad';
import {CampaignService} from '../campaign.service';
import {SelectionModel } from '@angular/cdk/collections'
import {AdComponent} from '../ad/ad.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
displayedColumns: string[] = ['id','client','country', 'budget', 'fromDate', 'toDate'];
	campaigns : Campaign[];

selection
  constructor(private campaignService : CampaignService,public dialog: MatDialog) {

	}

  ngOnInit() {
			this.getCampaigns();

			 const initialSelection = [];
			const allowMultiSelect = false;
			this.selection = new SelectionModel<Campaign>(allowMultiSelect, initialSelection);
  }
	openDialog(id): void {
		console.log(id);
	    const dialogRef = this.dialog.open(AdComponent, {
	      width: '250px',
	      data: id
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');
	    });
	  }


getCampaigns() : void {
	this.campaignService.getCampaigns().subscribe(resp=>{
		this.campaigns=resp;
		console.log(this.campaigns);
	});
}

CreateAd(id): void{
	console.log(id);
}
}
