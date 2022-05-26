class Mountain {
    name : string;
    height : number;

    constructor(name : string, height : number){
        this.height = height;
        this.name = name;
    }
}

class Product{
    name : string;
    price : number;

    constructor(name : string, price : number){
        this.name = name;
        this.price = price;
    }
}

class InventoryItem{
    product : Product;
    quantity : number;

    constructor(product : Product, quantity : number){
        this.product = product;
        this.quantity = quantity;
    }
}

let motor = new Product ("motor", 10);
let sensor = new Product ("sensor", 12.50);
let LED = new Product ("LED", 1);

this.inventory = [
    new InventoryItem (motor, 10),
    new InventoryItem (sensor, 4),
    new InventoryItem (LED, 20)
];

this.products = [
    new Product ("Coffee", 2.99),
    new Product ("Cajun Shrimp Pasta", 12.99),
    new Product ("Eggs Benedict", 3.99)
];

this.mountians = [
    new Mountain ("Kilimanjaro", 19341),
    new Mountain ("Everest", 29029),
    new Mountain ("Denali", 20310)
    ];

function calcInventoryValue(inventory) : number{
    let motorValue : number = motor.price * inventory[0].quantity;
    let sensorValue : number = sensor.price * inventory[1].quantity;
    let LEDValue : number = LED.price * inventory[2].quantity;
    let totalValue = motorValue + sensorValue + LEDValue;

    return totalValue;d
}

function calcAverageProductPrice(products) : number {
    let avgPrice : number = (products[0].price + products[1].price + products[2].price) / products.length;
    return avgPrice;
}

function findNameOfTallestMountain(mountians) : string {
    let output : number  = Math.max(mountians[0].height, mountians[1].height, mountians[2].height);
    if (output === 19341){
        return mountians[0].name;
    }
    else if (output === 29029){
        return mountians[1].name;
    }
    else if (output === 20310){
        return mountians[2].name;
    }
    else {
        let error : string = "Are you sure this is right? I don't recognize that mountain.";
        return error;
    }
}


let tallestMountain : string = findNameOfTallestMountain(mountains);
    console.log(tallestMountain);

let avgPrice : number = calcAverageProductPrice(products);
console.log(avgPrice);

let totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue);