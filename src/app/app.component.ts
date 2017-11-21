import { Component } from '@angular/core';
import {PriceQuate} from "./price-quate/price-quate.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock = "";
  priceQuate: PriceQuate = new PriceQuate("", 0);

  //事件类型就是子组件emit发射出来的事件类型
  // priceQuateHandler(event: PriceQuate){
  //   this.priceQuate = event;
  // }

  buyHandler(event: PriceQuate){
    this.priceQuate = event;
  }
}
