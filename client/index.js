const form = document.querySelector('#menu-form');
const nameInput = document.querySelector('#nameInput');
const entreeIn = document.querySelector('#entreeInput');
const sideIn = document.querySelector('#sideInput');
const drinkIn = document.querySelector('#drinkInput');
const radioIn = document.getElementsByName('togo');
const pickupIn = document.querySelector('#pickupInput');

const radioBtnVal = () => {
    for (let i = 0; i < radioIn.length; i++) {
        if (radioIn[i].checked) {
            return radioIn[i].value;
        }
    }
}

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

    let radioVal = radioBtnVal();

    let guestOrder = new Order(nameInput.value, entreeIn.value, sideIn.value, drinkIn.value, radioVal, pickupIn.value)
    
    axios.post('http://localhost:9001/order', guestOrder).then((res) => {
        alert(`Order submitted. Your order number is ${guestOrder.id}`);
    }).catch(() => console.log('issue with add order function'));

    nameInput.value = '';
    entreeIn.value = '';
    sideIn.value = '';
    drinkIn.value = 'mtn-dew';

    pickupIn.value = '8';
};

form.addEventListener('submit', addOrder);