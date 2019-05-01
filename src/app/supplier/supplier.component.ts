import { Component, OnInit } from '@angular/core';
import {Supplier} from './supplier';
import {SupplierService} from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

	suppliers : Supplier[];

  constructor(private supplierService : SupplierService) {

	}

  ngOnInit() {
			this.getSuppliers();
  }

getSuppliers() : void {
	this.supplierService.getSuppliers().subscribe(sup=>this.suppliers=sup);
}
}
