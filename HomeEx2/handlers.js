const newOrderList = require('./Orders').newOrderList;
const orderLogger = require ('./Orders').orderLogger;

const addOrder = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk });
    req.on('end', () => {
        const newOrder = JSON.parse(body);
        if (newOrder.name && newOrder.numOfTickets) {
          const ticket = newOrderList.addOrder(newOrder.name, newOrder.numOfTickets);
          res.write(ticket);
          res.end();
        } else{
            res.write('Bad body input!');
            res.end();
        }
    });
}

const viewOrders = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk });
    req.on('end', () => {
        const newOrder = JSON.parse(body);
        if (newOrder.admin) {
          const ticket = newOrderList.viewOrders();
          res.write(JSON.stringify(ticket));
          res.end();
        } else{
            res.write('There is no orders!');
            res.end();
        }
    });
}

const updateOrder = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk });
    req.on('end', () => {
        const newOrder = JSON.parse(body);
        if (newOrder.orderID && newOrder.numOfTickets) {
          const ticket = newOrderList.updateOrder(newOrder.orderID, newOrder.numOfTickets);
          res.write(ticket);
          res.end();
        } else{
            res.write('Bad body input!');
            res.end();
        }
    });
}

const deleteOrder = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk });
    req.on('end', () => {
        const newOrder = JSON.parse(body);
        if (newOrder.orderID) {
          const ticket = newOrderList.deleteOrder(newOrder.orderID);
          res.write(JSON.stringify(ticket));
          res.end();
        } else{
            res.write('There is no orders!');
            res.end();
        }
    });
}

const resetOrders = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk });
    req.on('end', () => {
        const newOrder = JSON.parse(body);
        if (newOrder.admin) {
          const ticket = newOrderList.resetOrders();
          res.write(JSON.stringify(ticket));
          res.end();
        } else{
            res.write('There is no orders!');
            res.end();
        }
    });
}

module.exports = {
  addOrder,
  viewOrders,
  updateOrder,
  deleteOrder,
  resetOrders,
};
