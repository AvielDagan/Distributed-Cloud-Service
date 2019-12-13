const url = require('url');
const addOrder = require ('./handlers').addOrder;
const deleteOrder = require ('./handlers').deleteOrder;
const updateOrder = require ('./handlers').updateOrder;
const viewOrders = require ('./handlers').viewOrders;
const resetOrders = require ('./handlers').resetOrders;


module.exports = (req, res) => {
    console.log(`Request ${req.method} came from ${req.url}`);

    const urlObject = url.parse(req.url, true, false);
    req.urlObject = urlObject;

    switch (req.method) {
        case 'PUT':
            if (urlObject.path.startsWith('/updateOrder')) {
                updateOrder(req, res);
            }
            break;
        case 'POST':
            if (urlObject.path.startsWith('/addOrder')) {
                addOrder(req, res);
            }
            else if(urlObject.path.startsWith('/viewOrders')){
                viewOrders(req, res);
            } 
            break;
        case 'DELETE':    
            if (urlObject.path.startsWith('/deleteOrder')) {
             deleteOrder(req, res);
            } 
            else if(urlObject.path.startsWith('/resetOrders')){
            resetOrders(req, res);
            } 
            break;
         default: return ('error');            
    }
};