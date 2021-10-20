class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    //['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
    loadProducts(productsArr) {
        for (var i = 0; i < productsArr.length; i++) {

            let [name, quantity, price] = productsArr[i].split(' ');
            price = Number(price);
            quantity = Number(quantity);
            if (this.budgetMoney >= price) {
                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = quantity;
                } else {
                    this.stockProducts[name] += quantity;
                }
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.history.join('\n');
    }

    //'Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55
    addToMenu(meal, neededProducts, price) {

        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: Number(price)
            };

            for (let i = 0; i < neededProducts.length; i++) {
                let [name, quantity] = neededProducts[i].split(' ');
                quantity = Number(quantity);
                this.menu[meal].products[name] = quantity;
            }

            let menuCount = Object.keys(this.menu).length;
            if (menuCount == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${menuCount} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        let menuCount = Object.keys(this.menu).length;
        if (menuCount == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let printResult = [];

            for (let meal in this.menu) {
                printResult.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return printResult.join('\n');
        }
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            const neededProducts = {};
            for (let product in this.menu[meal].products) {
                if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } else {
                    neededProducts[product] = this.menu[meal].products[product];
                }
            }

            for (let neededProduct in neededProducts) {
                this.stockProducts[neededProduct] -= neededProducts[neededProduct];
            }

            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}


let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));