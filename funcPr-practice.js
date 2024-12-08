const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

let totalPrice = 0;
for (let i=0; i<cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity
}
console.log(`Total Price: ${totalPrice}`);

totalPrice = 0;
cart.forEach(goods => totalPrice += goods.price * goods.quantity);
console.log(`Total Price: ${totalPrice}`);

totalPrice = cart.reduce((a,goods) => (a + goods.price * goods.quantity), 0);
console.log(`Total Price: ${totalPrice}`);

const itemTotals = cart.map(goods => ({
    item: goods.item,
    total: goods.price * goods.quantity
}));

console.log('제품별 금액:', itemTotals);

const names = ['alice', 'bob', 'charlie'];

const upperCasedNames = names.map(n => n.toUpperCase());
console.log(`upperCasedNames = ${upperCasedNames}`);

const capitalStartNames = names.map(n => n[0].toUpperCase() + n.slice(1));
console.log(`capitalStartNames = ${capitalStartNames}`);