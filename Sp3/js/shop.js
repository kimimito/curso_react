// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    products.forEach((product) => {
        if(product.id === id){
            cartList.push(product); 
        }
    });

}

// Exercise 2
function cleanCart() {
    cartList = [];
    cart = [];
    printCart();
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    var grocerySub = 0;
    var beautySub = 0;
    var clothesSub = 0;

    cart.forEach((product) => {
        if(product.type === 'grocery'){
            grocerySub += Math.round((product.price * product.quantity) * 100) / 100;
        } else if (product.type === 'beauty') {
            beautySub += Math.round((product.price  * product.quantity) * 100) / 100;
        } else {
            clothesSub += Math.round((product.price  * product.quantity) * 100) / 100;
        } 
    });  
    subtotal.grocery.value = grocerySub;
    subtotal.beauty.value = beautySub;
    subtotal.clothes.value = clothesSub;

    console.log('SubTotal',subtotal);

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    total = 0;

    for (key in subtotal) {
        total += subtotal[key].value;
    }

    console.log('TOTAL: '+ total);
    
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    cart = [];
    
    cartList.forEach((product) => {
        if (!cart.includes(product)) {
            product.quantity = 1;
            product.subtotal = product.quantity * product.price;
            cart.push(product);
        } else {
            product.quantity = product.quantity + 1;
            product.subtotal = product.quantity * product.price;    
        }
    });

}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    subtotal.grocery.discount = 0;
    totalWithDiscount = 0;

    cart.forEach((product) =>{
        if(product.id === 1 && product.quantity >= 3){
            product.subtotalWithDiscount = product.quantity * 10;
            subtotal.grocery.discount += product.subtotalWithDiscount;
         } else if (product.id === 3 && product.quantity >= 10){
            let discount = product.quantity * (product.price / 3) * 2;
            product.subtotalWithDiscount = Math.round(discount * 100) / 100;
            subtotal.grocery.discount += Math.round(product.subtotalWithDiscount * 100) / 100;  
        } 
        // comprobamos si hay descuento y lo aplicamos a totalWithDiscount
        if(product.subtotalWithDiscount > 0){
            totalWithDiscount += Math.round(product.subtotalWithDiscount * 100) / 100;
        } else {
            totalWithDiscount += product.subtotal;
        }
    });

    console.log('TOTALWITHDISCOUNT: '+ totalWithDiscount);

}

// Exercise 7

const findElementInCart = (id) => {
    for(let i = 0; i < cart.length; i ++) {
        if(cart[i].id === id) {
            return cart[i]
        }
    }
}

function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    products.forEach((product) => {
        if(product.id === id){
            cartList.push(product); 
        }
    });

    if (cart.length === 0) {
        const newItem = {...cartList[0]};
        newItem.quantity = 1;
        newItem.subtotal = newItem.quantity * newItem.price;
        cart.push(newItem);
    } else {
        const elementInCArt = findElementInCart(id);
        if(elementInCArt) {
            elementInCArt.quantity = elementInCArt.quantity + 1;
            elementInCArt.subtotal = elementInCArt.quantity * elementInCArt.price;
        }
        if(!elementInCArt) {
            for(let j = 0; j < cartList.length; j ++) {
                if(cartList[j].id === id) {
                    const newItem = {...cartList[j]};
                    newItem.quantity = 1;
                    newItem.subtotal = newItem.quantity * newItem.price;
                    cart.push(newItem);
                }
            }
        }
    }

    //cart = [];

    // var cartListCopy = [];

    // cartList.forEach((c) => { // hacemos una copia de cartList para no modificar ni cartList ni products
    //     cartListCopy.push(JSON.parse(JSON.stringify(c)));
    //     cartListCopy.push({...c})
    // });
    
    // cartList.forEach((product) => {
    //     if (!cart.includes(product)) {
    //         product.quantity = 1;
    //         product.subtotal = product.quantity * product.price;
    //         cart.push(product);
    //     } else {
    //         product.quantity = product.quantity + 1;
    //         product.subtotal = product.quantity * product.price;    
    //     }
    // });
    

    console.log('Product' , products);
    console.log('CartList',cartList);
    console.log('Cart', cart);  
    
    calculateSubtotals();
    calculateTotal();
    applyPromotionsCart();

}


// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    cart.forEach((product) => {
        if(product.id === id){
            if(product.quantity > 1){
                product.quantity = product.quantity - 1;
                product.subtotal = product.quantity * product.price;
                product.subtotalWithDiscount = 0;
            } else {
                cart.splice(cart.indexOf(product),1);  
            }
        }
    });

    console.log('Cart', cart);
    calculateSubtotals();
    applyPromotionsCart();
    calculateTotal();
    printCart();

}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let printCartHtml = "";

    if(cart.length === 0){
        //document.getElementById("printCart").innerHTML = `${sms}`;
        document.getElementById("printCart").innerHTML = '<h2 class="text-center">Select Something</h2>';
        document.getElementById("cartButons").style.display = 'none';
    } else {
        cart.forEach((product) => {
            if (product.subtotalWithDiscount){
                printCartHtml += "<tr><td>" + product.name + 
                                "</td><td>" + "$" + product.price + 
                                "</td><td>" + product.quantity + 
                                "</td><td>" + "$" + product.subtotal + 
                                "</td><td>" + "$" + product.subtotalWithDiscount +  
                                "</td><td>" + '<button onclick="removeFromCart('+ product.id +')" class="btn btn-primary m-3">Remove one item</button>' + 
                                "</td></tr>";
            } else {
                printCartHtml += "<tr><td>" + product.name + 
                                "</td><td>" + "$" + product.price + 
                                "</td><td>" + product.quantity + 
                                "</td><td>" + "$" + product.subtotal +  
                                "</td><td>" + '-' +
                                "</td><td>" + '<button onclick="removeFromCart('+ product.id +')" class="btn btn-primary m-3">Remove one item</button>' + 
                                "</td></tr>";
            }
        });
        document.getElementById("printCart").innerHTML = "<table>" + "<th>Product</th><th>Product Price</th><th>Quantity</th><th>Total</th><th>Total with discount</th>" + `${printCartHtml}` + "</table>" + "<p><b>Total Cart: " + "$" + `${total}` + "</b></p><p><b>Total Cart with discount: " + "$" + `${totalWithDiscount}` + "</b></p>";
        document.getElementById("cartButons").style.display = 'block';
    }
}
