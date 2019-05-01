import { Component, OnInit } from '@angular/core';
import {Client} from '../client/client';
import {Country} from '../country/country'
import {MediaPlannerService} from './mediaplanner.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-media-planner',
  templateUrl: './media-planner.component.html',
  styleUrls: ['./media-planner.component.css']
})
export class MediaPlannerComponent implements OnInit {

	clients:Client[];
	coutnries:Country[];
	myControl = new FormControl();
  constructor(private clientService: MediaPlannerService) {
		this.getClients();
	this.getCountries(); }

  ngOnInit() {
  }

	getClients() : void {
		this.clientService.getClients().subscribe(cl=>this.clients=cl);
	}
	getCountries() : void {
		this.clientService.getCountries().subscribe(c=>this.coutnries=c);
	}
}
