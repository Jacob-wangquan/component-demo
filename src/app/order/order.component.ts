import { Component, OnInit, Input } from '@angular/core';
import {PriceQuate} from "../price-quate/price-quate.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // @Input()
  // stockCode: string;
  // @Input()
  // amount: number;
  @Input()
  priceQuate:PriceQuate;

  constructor() {
    // setInterval(() => {
    //   this.stockCode = 'apple';
    // },2000);
  }

  ngOnInit() {
  }

}
