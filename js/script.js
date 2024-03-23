// Adding Dynamic Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Adding dynamic name and student ID to the page
const studentId = document.getElementById('dynamicId');
studentId.innerHTML = '200554124';

// Validations for the order submission of the user
const form = document.getElementById("orderForm");
const userName = document.getElementById("userName");
const specialInstructions = document.getElementById("specialInstructions");

form.addEventListener("submit", function(event){
    // Remove whitespace from the start and end of the name
    var trimmedName = userName.value.trim();

    // Check if the name is empty
    if (trimmedName === "") {
        alert("Name is required.");
        event.preventDefault();
    }
    // Check if the name contains only letters and spaces
    else if (!/^[a-zA-Z\s]*$/.test(trimmedName)) {
        alert("Name can only contain letters and spaces.");
        event.preventDefault();
    }
    // Check if the name is under 30 characters
    else if (trimmedName.length > 30) {
        alert("Name cannot be more than 30 characters.");
        event.preventDefault();
    }

    // Check if the special instructions are too long
    if (specialInstructions.value.length > 400) {
        alert("Special instructions cannot be more than 200 characters.");
        event.preventDefault();
    }
    // Check if the special instructions only contain letters and punctuation
    else if (!/^[a-zA-Z\s.,!?]*$/.test(specialInstructions.value)) {
        alert("Special instructions can only contain letters and punctuations.");
        event.preventDefault();
    }
});


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

function togglePopup(){
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