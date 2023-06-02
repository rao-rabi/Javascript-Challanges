// button to increment and decrement 

let num = document.getElementById("number");

let count = 0;

function add() {
    count++;
    num.textContent = count;
}

function subtract() {
    if (count > 0) {
        count--;
        num.textContent = count;
    }
}

// button that toggles the visibility of an element

let para = document.getElementById("paraHid");
para.style.display = "none";
function visibility() {
    if (para.style.display != "none") {
        para.style.display = "none";
    }
    else {
        para.style.display = "block"
    }
}

// Implement a dynamic search functionality:

// Create an array of objects (e.g., an array of products with names and prices).
// Add an input field and a button to the HTML page.
// Implement JavaScript functionality so that when the button is clicked, it searches the array based on the input value and displays matching results.


let products = [
    { name: 'Apple', price: 'Rs.100/Kg', image: "/Assets/apple_158989157.jpg" },
    { name: 'Banana', price: 'Rs.60/Dozen', image: "/Assets/banane.jpg" },
    { name: 'Orange', price: 'Rs.80/Kg', image: "/Assets/orange.jpg" },
    { name: 'Eggs', price: 'Rs.120/Dozen', image: "/Assets/eggs-e1648216369366.jpeg" },
    { name: 'Peach', price: 'Rs.200/Kg', image: "/Assets/9517idea99peach.jpg" },
    { name: 'WaterMellon', price: 'Rs.50/Kg', image: "/Assets/Watermelon.jpg" },
    { name: 'Strawberry', price: 'Rs.250/Kg', image: "/Assets/bn8e34.jpg" },
    { name: 'Guava', price: 'Rs.100/Kg', image: "/Assets/pink-guava-halves.jpg" },
    { name: 'Potato', price: 'Rs.90/Kg', image: "/Assets/AL027-01_pomme_de_terre_0_0.jpg" },
    { name: 'Onion', price: 'Rs.80/Kg', image: "/Assets/36700-0w470h470_Organic_Red_Onion_From_Italy.jpg" },
    { name: 'Tomato', price: 'Rs.150/Kg', image: "/Assets/tomatoes-canva.jpg" },
    { name: 'Carrot', price: 'Rs.30/Kg', image: "/Assets/CARROTORANGE.jpg" }
];


let productId = document.getElementById("productId");

function renderProducts(products) {
    productId.innerHTML = "";
    products.forEach((item) => {
        productId.innerHTML += `<div class="fs-5 p-3 border border-5 border-danger d-flex justify-content-center align-items-center col-4" style="height:200px; box-shadow: 0 0 10px red;"><img class="object-fit-contain" width="140px" src="${item.image}"> <p class="pt-3"><span class="fw-bold fs-4">Name: </span>${item.name}<br> <span class="fw-bold fs-4">Price: </span> ${item.price}</p></div><br>`
    })
}

function searchProducts() {
    let search = document.getElementById("productInput");
    let searchedItem = search.value.toLowerCase();
    let searchFilter = products.filter((item) => {
        let productMatch = item.name.toLowerCase().includes(searchedItem);
        return productMatch;
    });
    renderProducts(searchFilter);
}



















// Create a slideshow/carousel:

// Add an HTML container element (e.g., <div>) with multiple images inside.
// Implement JavaScript functionality to display the images one by one, automatically transitioning to the next image after a certain time interval.
// Add buttons to manually navigate to the previous and next images.
// Build a todo list:

// Create an HTML input field and a button for adding todo items.
// Implement JavaScript functionality to add new todo items to a list when the button is clicked.
// Display the list of todo items dynamically on the page.
// Add options to mark items as completed, delete items, or filter items based on their status.