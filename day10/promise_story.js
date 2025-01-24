// Delhi - Team A: Responsible for making a form to get user details
function getUserDetails(cb) {
    // takes user details :: it will take variable amount of time
    // validate the user details
    // cases : sometimes it will allow to proceed and product will delivered if details are valid
    //       --> Proceed :: "P3120", "Delhi"
    //           --> cb("P3120", "Delhi")
    // otherwise: it will reject the delivery
    //       --> Send Notification
}

// Mumbai - Team B: Delivering the purchased item
function deliverItem(productId, address) {
    // logic
    console.log("Product Delivered", productId, address);
}

// Bangalore - Manager :: To manage platform :: controls the flow
getUserDetails(deliverItem);
// What if there is some edge case which A team missed to handle properly, and now
// Even if everything was correct, the product will not be delivered as the DeliverItem function is not called
// Manager is not aware of anything, as he has
//  transferred the ownership of calling Team B function to Team A
// Team B can also call it multiple times by mistake // loop or something

// ----------> INVERSION of CONTROL :: callbacks

// ----------------------------------------------------------------------
function getUserDetails(cb) {
    if (Math.random() > 0.5) {
        cb();
    }
}
function deliverItem(productId, address) {
    console.log("Product Delivered", productId, address);
}

getUserDetails(deliverItem);

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// PROMISES
function getUserDetails(cb) {
    if (Math.random() > 0.5) {
        cb();
    }

    // return PROMISE
}

function deliverItem(productId, address) {
    console.log("Product Delivered", productId, address);
}

const pr = getUserDetails();
pr.then(deliverItem);
pr.catch(() => {});
// getUserDetails takes variable amount of time :: you should PROMISE me that you will UPDATE ME when DONE
// if everything happens in expected way THEN i will call deliverItem
// otherwise I will do something else (send a notification of error to client)
