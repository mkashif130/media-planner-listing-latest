import { Component, OnInit } from '@angular/core';
import {MediaChannel} from './mediaChannel';
import {Supplier} from '../supplier/supplier'
import {MediaChannelService} from './media-channel.service';
import {SupplierService} from '../supplier/supplier.service';
@Component({
  selector: 'app-media-channel',
  templateUrl: './media-channel.component.html',
  styleUrls: ['./media-channel.component.css']
})
export class MediaChannelComponent implements OnInit {

	mediaChannels : MediaChannel[];
	selectedMediaChannel: MediaChannel;
	suppliersInMedia :  Supplier[];

  constructor(private mediaChannelService : MediaChannelService ) {

	}

  ngOnInit() {
			this.getMediaChannels();
  }

getMediaChannels() : void {
	this.mediaChannelService.getMediaChannels().subscribe(resp=>{
		this.mediaChannels = resp;
	});
}

onSelect(mc: MediaChannel):void{
	this.selectedMediaChannel= mc;
	console.log(mc.id);
	this.mediaChannelService.getSuppliersByMedia(mc.id).subscribe(resp=>{
		console.log(resp);
		this.suppliersInMedia = resp;
	});
}
}
