const form = document.querySelector('#menu-form');
const nameInput = document.querySelector('#nameInput');
const entreeIn = document.querySelector('#entreeInput');
const sideIn = document.querySelector('#sideInput');
const drinkIn = document.querySelector('#drinkInput');
// const radioIn = document.querySelector('');
const pickupIn = document.querySelector('#pickupInput');

class Order {
    constructor(name, entree, side, drink, togo, pickup) {
        this.name = name;
        this.entree = entree;
        this.side = side;
        this.drink = drink;
        this.togo = togo;
        this.pickup = pickup;
        this.id = Math.floor(Math.random() * 1000);
    }
}


const addOrder = evt => {
    evt.preventDefault();

    new Order(nameInput.value, entreeIn.value, sideIn.value, drinkIn.value, radioIn.value, pickupIn.value)
    alert(`Your order is number ${.id}`);

    axios.post('/')

    nameInput.value = '';
    entreeIn.value = '';
    sideIn.value = '';
    drinkIn.value = 'mtn-dew';

    pickupIn.value = '8';
};

form.addEventListener('submit', addOrder);