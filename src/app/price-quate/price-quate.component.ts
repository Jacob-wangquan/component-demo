import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quate',
  templateUrl: './price-quate.component.html',
  styleUrls: ['./price-quate.component.css']
})
export class PriceQuateComponent implements OnInit {

  stockCode:string = 'IBM';
  price:number;

  @Output()
  lastPrice:EventEmitter<PriceQuate> = new EventEmitter();
  //泛型 用于指示这个数据是什么类型
  @Output()
  buy:EventEmitter<PriceQuate> = new EventEmitter();

  constructor() {
    setInterval(() =>{
      let priceQuate:PriceQuate = new PriceQuate(this.stockCode, 100*Math.random());
      this.price = priceQuate.lastPrice;
      this.lastPrice.emit(priceQuate);
    },1000);
  }

  buyStock(event){
    this.buy.emit(new PriceQuate(this.stockCode, this.price));
  }

  ngOnInit() {
  }

}

export class PriceQuate {
  constructor(public stockCode:string, public lastPrice:number){

  }
}
