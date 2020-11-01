import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public data  = 
  [ {
     orderName: 'test',
     stage: 'active',
     totalcost: '£305',
   },
   {
     orderName: 'test2',
     stage: 'active',
     totalcost: '£305',
   },
   {
     orderName: 'test3',
     stage: 'inProgress',
     totalcost: '£305',
   }
 ];
 public Orders = new BehaviorSubject<any>(this.data);
  constructor() { 
  }

  setOrders(data){
  this.Orders.next(data)
  }
  getOrders(): Observable<any>{
    return this.Orders.asObservable();
  }

}



