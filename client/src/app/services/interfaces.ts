export interface IOrders extends  Array<IOrder> {}

    
  

export interface IOrder {
        'totalcost': string,
        'stage': string,
        'orderName': string
  }