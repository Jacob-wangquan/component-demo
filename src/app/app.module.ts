import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';

import { FormsModule } from "@angular/forms";
import { PriceQuateComponent } from './price-quate/price-quate.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
