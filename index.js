
function addProductToCart(product, cart = 0) {
	const { name, priceInCents } = product;
	if(!cart){ //if no cart, build new one and add product
		const newCartItem = {};
    newCartItem[name] = {
					priceInCents: priceInCents,
					quantity: 1,
					};
		cart = newCartItem;
		return cart;
	}
	for(let cartItem in cart){ //if item already exists in cart, increase quantity
		let item = cart[cartItem];
		if(cartItem === name){
			item.quantity += 1;
			return cart;
		} else{ //cart exists, but the item doesn't not exist in cart yet
				const newCartItem = {};
    		newCartItem[name] = {
					priceInCents: priceInCents,
					quantity: 1,
				};
				return cart = {...cart, ...newCartItem};
		}
	}
}

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function printReceipt(cart) {
  let buildString = '';
  let totalWithQuantity = 0;
	if(Object.keys(cart).length === 0) return null;
  for(let cartItem in cart){
    let item = cart[cartItem];
    priceFormatted = printablePrice(item.quantity * item.priceInCents);
    buildString += (`${item.quantity}x${cartItem} - ${priceFormatted}\n`);
  }
  return buildString += ('Total: ' + printablePrice(calculateTotal(cart)));
}

function calculateTotal(cart) {
	let total = 0;
  for(let cartItem in cart){
		let item = cart[cartItem];
		total += (item.quantity * item.priceInCents);
  }
	return total;
}


const cart = {
	"Good Icecream": { 
		priceInCents: 20,
		quantity: 1,
	},
	"Bad Icecream": { 
		priceInCents: 10,
		quantity: 1,
	},
}

const product = {
	name: 'Gooder Icecream',
	priceInCents: 4,
	quantity: 1,
};

printReceipt(cart);