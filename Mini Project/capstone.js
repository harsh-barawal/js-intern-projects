console.log("--- Initializing Inventory System ---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

const productName = prompt("Enter product name:", "Monitor");
const priceInput = prompt("Enter product price:", "150");
const productPrice = Number(priceInput);

if (
    productName === null ||
    productName.trim() === "" ||
    priceInput === null ||
    priceInput.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product name or price. Existing inventory will be displayed.");
} else {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });
}

function getCategory(price) {
    if (price < 50) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

function getCategoryBadge(price) {
    const category = getCategory(price);

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function(product) {
    console.log(
        "* Item: " + product.name +
        " ($" + product.price +
        ") -> Category: " + getCategoryBadge(product.price)
    );
});

function calculateTotal(items) {
    let total = 0;

    items.forEach(function(product) {
        total += product.price;
    });

    return total;
}

const calculateFinalPrice = (price, tax = 0, discount = 0) => {
    const taxAmount = price * tax / 100;
    const discountAmount = price * discount / 100;

    return price + taxAmount - discountAmount;
};

console.log("--- Inventory Search (break and continue) ---");

let firstAffordableProduct = null;

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].price >= 200) {
        continue;
    }

    firstAffordableProduct = inventory[i];
    break;
}

console.log(
    "First Affordable Product:",
    firstAffordableProduct
        ? firstAffordableProduct.name
        : "None found"
);

console.log("--- Financial Analytics ---");

console.log("Total Inventory Value: $" + calculateTotal(inventory));

console.log(
    "Filtered Affordable Items (Under $200):",
    inventory
        .filter(function(product) {
            return product.price < 200;
        })
        .map(function(product) {
            return product.name;
        })
);

console.log(
    "Formatted Report List:",
    inventory.map(function(product) {
        return product.name.toUpperCase() + ": $" + product.price;
    })
);

console.log(
    "Laptop Final Price (10% tax, 5% discount):",
    calculateFinalPrice(800, 10, 5)
);
