import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientComponent} from './client/client.component';
import {SupplierComponent} from './supplier/supplier.component';
import {MediaChannelComponent} from './media-channel/media-channel.component';
import {MediaPlannerComponent} from './media-planner/media-planner.component';
import {CampaignComponent} from './media-planner/campaign/campaign.component';
import {AdlistingComponent} from './media-planner/ad/adlisting/adlisting.component';

const routes: Routes = [
	{path: 'countries', component: CountryComponent},
	{path: 'configurations', component: DashboardComponent},
	{path: 'mediaplanner', component: MediaPlannerComponent},
	{path: 'campaign', component: MediaPlannerComponent},
	{path: 'campaigns', component: CampaignComponent},
	{path: '', redirectTo:"/configurations", pathMatch:'full'},
	{path: 'clients', component: ClientComponent},
	{path: 'suppliers', component: SupplierComponent},
	{path: 'mc', component: MediaChannelComponent},
	{path:'mcsup', component: MediaChannelComponent},

	{path:'ads', component: AdlistingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
