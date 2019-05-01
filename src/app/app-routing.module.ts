import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientComponent} from './client/client.component';
import {SupplierComponent} from './supplier/supplier.component';
import {MediaChannelComponent} from './media-channel/media-channel.component'
const routes: Routes = [
	{path: 'countries', component: CountryComponent},
	{path: 'configurations', component: DashboardComponent},
	{path: '', redirectTo:"/configurations", pathMatch:'full'},
	{path: 'clients', component: ClientComponent},
	{path: 'suppliers', component: SupplierComponent},
	{path: 'mc', component: MediaChannelComponent},
	{path:'mcsup', component: MediaChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
