// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
}
const breakfast1 = new Breakfast("Toast", "Orange Juice")
const breakfast2 = new Breakfast("Sausage", "Chocolate Milk")

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}
const lunch1 = new Lunch("Cobb Salad", "Bisque", "Water")
const lunch2 = new Lunch("Chicken Salad", "Jumbalaya", "Diet Coke")

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}
const dinner1 = new Dinner("Egg Salad", "Lobster Bisque", "Ham", "Brownies")
const dinner2 = new Dinner("Tuna Salad", "Tomato Soup", "Steak", "Ice Cream") 