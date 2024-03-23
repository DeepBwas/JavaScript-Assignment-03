// Deep Biswas - 200554124

// Adding dynamic name and student ID to the page
const studentId = document.getElementById('dynamicId');
studentId.innerHTML = '200554124';
const studentName = document.querySelector('.dynamicName');
studentName.textContent = 'Deep Biswas';
const submitBtn = document.getElementById('submitBtn');

// Adding Dynamic Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

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
}

// Add event listeners outside of the togglePopup function
popupClose.addEventListener('click', function(){
    popup.style.display = 'none';
});
window.addEventListener('click', function(event){
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
document.querySelector('.popup-container').addEventListener('click', function(event){
    event.stopPropagation();
});

// Defining the pizza object
class Pizza{
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
    serveIt(){
        let condimentsText = this.condiments.length > 0 ? `and with ${this.condiments.join(", ")} as condiment(s).` : "without any condiments.";
        let specialInstructionsText = this.specialInstructions ? `Special instructions: ${this.specialInstructions}` : "No special instructions";
        let pizzaOrder = `Confirmed pizza order for ${this.name}: ${this.quantity} ${this.size} pizza with ${this.crust} crust, ${this.sauce} sauce, ${this.cheese.join(", ")} cheese, ${this.toppings.join(", ")} toppings, ${condimentsText} ${specialInstructionsText}`;
        output.textContent = pizzaOrder;
        togglePopup(true);
    }
}

// Form submit handler
let pizzaOut;

submitBtn.addEventListener('click', function(event){
    var form = document.getElementById('orderForm');
    var userName = form.elements['name'].value;
    var size = form.elements['size'].value;
    var crust = form.elements['crust'].value;
    var sauce = form.elements['sauce'].value;
    var quantity = form.elements['quantity'].value;
    var specialInstructions = form.elements['instructions'].value;
    var cheese = Array.from(form.elements['cheese']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    var toppings = Array.from(form.elements['topping']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    var condiments = Array.from(form.elements['condiment']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    event.preventDefault();
    // Validate name
    if (!userName || userName.trim() === ''){
        output.textContent = 'Please enter your name.';
        togglePopup(false);
        return;
    }
    if (!/^[a-zA-Z\s]*$/.test(userName)){
        output.textContent = 'Please enter a valid name.';
        togglePopup(false);
        return;
    }
    if (userName.length > 30){
        output.textContent = 'Name should be under 30 characters.';
        togglePopup(false);
        return;
    }
    // Validate parameters
    if (size === "select"){
        output.textContent = 'Please select a size.';
        togglePopup(false);
        return;
    }
    if (crust === "select"){
        output.textContent = 'Please select a crust.';
        togglePopup(false);
        return;
    }
    if (sauce === "select"){
        output.textContent = 'Please select a sauce.';
        togglePopup(false);
        return;
    }
    if (cheese.length === 0){
        output.textContent = 'Please select at least one cheese.';
        togglePopup(false);
        return;
    }
    if (toppings.length === 0){
        output.textContent = 'Please select at least one topping.';
        togglePopup(false);
        return;
    }
    // Validate special instructions
    if (specialInstructions.length > 1000){
        output.textContent = 'Too much special instructions. Please keep it under 1000 characters.';
        togglePopup(false);
        return;
    }
    
    pizzaOut = new Pizza(userName, size, crust, sauce, cheese, toppings, condiments, quantity, specialInstructions);
    console.log(pizzaOut);
    pizzaOut.serveIt();
});
