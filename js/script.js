// Adding dynamic name and student ID to the page
const studentId = document.getElementById('dynamicId');
studentId.innerHTML = '200554124';
const studentName = document.querySelector('.dynamicName');
studentName.textContent = 'Deep Biswas';

// Adding Dynamic Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Defining the pizza object
class Pizza {
    constructor(name, size, crust, sauce, cheese, toppings, condiments, quantity, specialInstructions) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
        this.condiments = condiments;
        this.quantity = quantity;
        this.specialInstructions = specialInstructions;
    }
    // Adding a serveIt method that will generate a text output of the pizza ordered
    serveIt() {
        let specialInstructionsText = this.specialInstructions ? `Special instructions: ${this.specialInstructions}` : "with no special instructions";
        let pizzaOrder = `Pizza order for ${this.name}, ${this.quantity} ${this.size} pizza with ${this.crust} crust, ${this.sauce} sauce, ${this.cheese.join(", ")} cheese, ${this.toppings.join(", ")} toppings, and ${this.condiments.join(", ")} condiments. ${specialInstructionsText}`;
        return pizzaOrder;
    }

}

// Defining size options
var sizeOptions = ["Select", "Small", "Medium", "Large", "X-Large"];
var selectSize = document.getElementById("selectSize");
sizeOptions.forEach(function(optionValue, index) {
    var option = document.createElement("option");
    option.value = optionValue.toLowerCase();
    option.text = optionValue;
    if (index === 0) {
        option.selected = true;
    }
    selectSize.appendChild(option);
});

// Defining crust options
var crustOptions = ["Select", "Thin", "Regular", "Thick", "Pan"];
var selectCrust = document.getElementById("selectCrust");
crustOptions.forEach(function(optionValue, index) {
    var option = document.createElement("option");
    option.value = optionValue.toLowerCase();
    option.text = optionValue;
    if (index === 0) {
        option.selected = true;
    }
    selectCrust.appendChild(option);
});

// Defining sauce options
var sauceOptions = ["Select", "Tomato", "Basil", "Pesto", "Alfredo", "Specialty"];
var selectSauce = document.getElementById("selectSauce");
sauceOptions.forEach(function(optionValue, index) {
    var option = document.createElement("option");
    option.value = optionValue.toLowerCase();
    option.text = optionValue;
    if (index === 0) {
        option.selected = true;
    }
    selectSauce.appendChild(option);
});

// Defining cheese options
var cheeseOptions = ["Mozzarella", "Cheddar", "Parmesan", "Fontina", "Provolone"];
var cheeseContainer = document.getElementById("cheeseContainer");
cheeseOptions.forEach(function(cheeseValue) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = cheeseValue.toLowerCase();
    checkbox.name = "cheese";
    checkbox.value = cheeseValue.toLowerCase();

    var label = document.createElement("label");
    label.htmlFor = cheeseValue.toLowerCase();
    label.appendChild(document.createTextNode(cheeseValue));

    cheeseContainer.appendChild(checkbox);
    cheeseContainer.appendChild(label);
    cheeseContainer.appendChild(document.createElement("br"));
});

// Defining toppings options
var toppingsOptions = ["Pepperoni", "Sausage", "Chicken", "Bacon", "Ham", "Beef", "Salami", "Shrimp", "Mushrooms", "Onions", "Green Peppers", "Black Olives", "Green Olives", "Pineapple", "Spinach", "Tomatoes", "Jalapenos"];
var toppingsContainer = document.getElementById("toppingsContainer");
toppingsOptions.forEach(function(toppingValue) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = toppingValue.toLowerCase();
    checkbox.name = "topping";
    checkbox.value = toppingValue.toLowerCase();

    var label = document.createElement("label");
    label.htmlFor = toppingValue.toLowerCase();
    label.appendChild(document.createTextNode(toppingValue));

    toppingsContainer.appendChild(checkbox);
    toppingsContainer.appendChild(label);
    toppingsContainer.appendChild(document.createElement("br"));
});

// Defining condiments options
var condimentsOptions = ["Chilli Flakes", "Oregano", "Black Pepper", "White Pepper", "Salt"];
var condimentsContainer = document.getElementById("condimentsContainer");
condimentsOptions.forEach(function(condimentValue) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = condimentValue.toLowerCase();
    checkbox.name = "condiment";
    checkbox.value = condimentValue.toLowerCase();

    var label = document.createElement("label");
    label.htmlFor = condimentValue.toLowerCase();
    label.appendChild(document.createTextNode(condimentValue));

    condimentsContainer.appendChild(checkbox);
    condimentsContainer.appendChild(label);
    condimentsContainer.appendChild(document.createElement("br"));
});

// Quantity input
var selectQuantity = document.getElementById("selectQuantity");
for (var i = 1; i <= 100; i++){
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    if (i === 1) {
        option.selected = true;
    }
    selectQuantity.appendChild(option);
}

// Popup Handler
const popup = document.getElementById('popup');
const popupClose = document.getElementById('closePopup');
const output = document.getElementById('outputMsg');
function togglePopup(isSuccess){
    var popupImage = document.getElementById("popupImg");
    if (isSuccess) {
        popupImage.src = "./img/popup-tick-mark.png";
    } else {
        popupImage.src = "./img/popup-error-mark.png";
    }

    popup.style.display = 'flex';
    popupClose.addEventListener('click', function(){
        popup.style.display = 'none';
    });
    window.addEventListener('click', function(){
        popup.style.display = 'none';
    });
    document.querySelector('.popup-container').addEventListener('click', function(event){
        event.stopPropagation();
    });
}