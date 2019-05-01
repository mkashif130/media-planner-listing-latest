import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MediaChannelComponent } from './media-channel/media-channel.component';
import { MediaPlannerComponent } from './media-planner/media-planner.component';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatAutocompleteModule} from '@angular/material/autocomplete';
 import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
// import {FormControl} from '@angular/forms';
 import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    DashboardComponent,
    ClientComponent,
    SupplierComponent,
    MediaChannelComponent,
    MediaPlannerComponent,
		//MatAutocompleteModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatAutocompleteModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
     // and returns simulated server responses.
     // Remove it when a real server is ready to receive requests.

     HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, { dataEncapsulation: false }
     )

  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
