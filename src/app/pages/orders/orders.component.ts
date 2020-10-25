import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { DialogService } from 'src/app/components/dialog/dialog.service';
import { ClientsComponent } from '../clients/clients.component';
import { ConfirmCardComponent } from 'src/app/components/confirm-card/confirm-card.component';
import { element } from 'protractor';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IOrders, IOrder } from 'src/app/services/interfaces';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  formOrder = this.fb.group(
    {
      orderName: ['', Validators.compose([Validators.required])],
      stage: ['', Validators.compose([Validators.required])],
      totalcost: ['', Validators.compose([Validators.required])],
    }
  );
  public add = false;
  public edit = false;
  public position: number;
  public allStates = [
    {
      stateName: 'Active',
      state: 'active',
      active: true,
      total: 0
    },
    {
      stateName: 'In progress',
      state: 'inProgress',
      active: true,
      total: 0
    },
    {
      stateName: 'Closed',
      state: 'closed',
      active: true,
      total: 0
    },
    {
      stateName: 'Waiting for payment',
      state: 'paymentWaiting',
      active: true,
      total: 0
    },
    {
      stateName: 'Sending',
      state: 'Sending',
      active: true,
      total: 0
    },
  ]
  public states = this.allStates;
 
  
  
   
public openOrders: number;

public Orders:any;


  constructor(private fb: FormBuilder, public dialog: DialogService, public orderService: OrderService) {
    
   

    
}

  getTotalStates(){
    this.allStates.forEach(status => status.total = this.Orders.filter(order => order.stage === status.state).length)
  }
  updateOpenOrders(){
    this.openOrders = this.Orders.filter(order => order.stage !== 'closed').length
  }
   hideStags(state, index){
    this.states[index].active = !state;
   }
  
   filterState(value){
     if(value === 'allStages'){
      this.states = this.allStates
     } else {
      this.states = this.allStates.filter(element => element.state === value)
      this.states.map(states => states.active = true)
     }
  }
   Submit(){
    const {orderName, stage, totalcost} = this.formOrder.value;
    const body = {
      orderName: orderName,
      stage: stage,
      totalcost: totalcost,
    }
    console.log('heelp')
      this.Orders.push(body)
      this.orderService.setOrders(this.Orders)
      }

      addOrder(){
        this.add = !this.add;
      }
     
      editOrder(i){
        this.add = false;
        this.position =null;
        this.edit = !this.edit
        this.position = i;
        //this.formOrder.setValue(this.data[this.position])
        this.formOrder.setValue(this.Orders[this.position])



      }
      editOrderSubmit(i){
        this.edit = !this.edit;
        const {orderName, stage, totalcost} = this.formOrder.value;
        const body = {
          orderName: orderName,
          stage: stage,
          totalcost: totalcost,
        }
        this.Orders.splice(i, 1, body )
        this.orderService.setOrders(this.Orders)
      }

      orderStatesEdit(orderStates, i ){
        this.Orders[i].stage = orderStates
        this.orderService.setOrders(this.Orders)
      }

  onEdit(i){
    const orderName = this.Orders[i].orderName;
    //this.data[i].orderName
    const ref = this.dialog.open(ConfirmCardComponent,{
      data: { cancelText: 'exit', okText: 'ok', text: orderName}
    
    });
    ref.afterClosed.subscribe(result => {
      console.log(result,' this is the dialog respons')
    })
  }


  ngOnInit(): void {
    
   this.orderService.getOrders().subscribe((response) => {
    this.Orders = response
    this.getTotalStates()
    this.updateOpenOrders()
  })
    
  }

}
