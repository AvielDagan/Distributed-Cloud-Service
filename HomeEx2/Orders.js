const EventEmitter = require('events');
const moment = require ('./node_modules/moment');
var orderID = 1;
const MAX_NUM_OF_ORDERS = 10;
class OrderClass{
    constructor(nameOrderer,numOfTickets,ID){
        this.name = nameOrderer;
        this.num = numOfTickets;
        this.date = moment().format('L');
        this.id = ID;
    }
}
class OrdersList extends EventEmitter{
    constructor(){
        super();
        this.orderList = [];
        this.count = 0;
    }
    addOrder(nameOrderer,numOfTickets){
        if(numOfTickets +this.count > MAX_NUM_OF_ORDERS){
            this.emit('ErrorHandle', `cant add order for ${nameOrderer}`);
            return 'cant add order';
        }else{
            let currID = orderID;
            this.emit(`addOrder`, {name: nameOrderer, num : numOfTickets , ID : currID});
            orderID++;
            this.count += numOfTickets;
            return `added order for ${nameOrderer}, ID order is ${currID}`;
        }
    }
    deleteOrder(orderID){
        var i = this.orderList.findIndex(check=>check.id == orderID); 
            if (i == -1) {
                this.emit('ErrorHandle', `cant delete order for ${orderID}`);
            }else{
                this.count -= this.orderList[i].numOfTickets;
                this.emit(`deleteOrder`, {index:i , id:this.orderList[i].id});
                return `deleted order`;
            }
    }
    updateOrder(orderID , numOfTickets){
        var i = this.orderList.findIndex(check=>check.id == orderID); 
        if (i == -1) {
            this.emit('ErrorHandle', `cant update order for ${orderID}`);
        }else{               
            this.count = (this.count) - (this.orderList[i].num) + (numOfTickets);
            if (this.count > MAX_NUM_OF_ORDERS ){
                this.emit('ErrorHandle', `cant update order for ${orderID}`);
                return `cant updated - there no such amount of tickets available`;

            }else{
            this.emit(`updateOrder`, {index: i , num : numOfTickets, id:this.orderList[i].id });
            return `updated order`;
            }
        }
    }
    viewOrders(){
        this.emit(`viewOrders`);
        return `this is all the orders.`;
    }
    resetOrders(){
        this.emit(`resetOrders`);
        return `the list orders has been reset`;  
    }
}

const newOrderList = new OrdersList();

newOrderList.on(`addOrder`, (data) => {
    var newOrder = new OrderClass(data.name,data.num,data.ID);
    newOrderList.orderList.push(newOrder);
    console.log(`added order for ${data.name}, ID of the order is ${data.ID}`);
});

newOrderList.on('ErrorHandle',(msg) =>{
    console.log(msg);
});

newOrderList.on('deleteOrder',(data) =>{
    newOrderList.orderList.splice(data.index, 1); 
    console.log(`deleted order for ID of the order is ${data.id}`); 
});

newOrderList.on('updateOrder',(data) =>{
    newOrderList.orderList[data.index].num = data.num;
    newOrderList.orderList[data.index].date = moment().format('L');
    console.log(`updated order for ID of the order is ${data.id}`);
});

newOrderList.on('viewOrders',() =>{
    console.log(`all the orders:` , newOrderList.orderList);
});

newOrderList.on('resetOrders',() =>{
    newOrderList.orderList = [];
    console.log(`the list orders has been reset`);
});

module.exports ={
    newOrderList
}