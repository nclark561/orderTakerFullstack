const form = document.querySelector('#menu-form');
const editForm = document.querySelector('#order-edit');
const nameInput = document.querySelector('#nameInput');
const entreeIn = document.querySelector('#entreeInput');
const sideIn = document.querySelector('#sideInput');
const drinkIn = document.querySelector('#drinkInput');
const radioIn = document.getElementsByName('togo');
const pickupIn = document.querySelector('#pickupInput');
const idIn = document.querySelector('#order-id')
const editName = document.querySelector('#edit-name');
const editEntree = document.querySelector('#edit-entree');
const editSide = document.querySelector('#edit-side');
const editDrink = document.querySelector('#edit-drink');
const editRadio = document.getElementsByName('edit-togo');
const editPickup = document.querySelector('#edit-pickup');
let allOrders = [];

const radioBtnVal = () => {
    for (let i = 0; i < radioIn.length; i++) {
        if (radioIn[i].checked) {
            return radioIn[i].value;
        }
    }
}

const radioBtnVal2 = () => {
    for (let i = 0; i < editRadio.length; i++) {
        if (editRadio[i].checked) {
            return editRadio[i].value;
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
        console.log(res.data);
        allOrders = res.data;
    }).catch(() => console.log('issue with add order function'));

    nameInput.value = '';
    entreeIn.value = '';
    sideIn.value = '';
    drinkIn.value = 'mtn-dew';

    pickupIn.value = '8';
};

const editOrder = evt => {
    evt.preventDefault();

    let radioVal = radioBtnVal2();

    for (let i = 0; i < allOrders.length; i++){
        if (allOrders[i].id === +idIn.value) {
            let guestOrder = allOrders[i];
            guestOrder.name = editName.value;
            guestOrder.entree = editEntree.value;
            guestOrder.side = editSide.value;
            guestOrder.drink = editDrink.value;
            guestOrder.togo = radioVal;
            guestOrder.pickup = editPickup.value;
            axios.put('http://localhost:9001/order/edit', guestOrder).then((res) => {
            allOrders = res.data;
            }).catch((err) => console.log(err));
            console.log(allOrders);
            break;
        }
    }
    editName.value = '';
    editEntree.value = '';
    editSide.value = '';
    editDrink.value = 'mtn-dew';

    editPickup.value = '8';
}

form.addEventListener('submit', addOrder);
editForm.addEventListener('submit', editOrder);