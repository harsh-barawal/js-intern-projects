function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log("Standard Function Area (Default 5x4):", rectangleArea());

const area = (length = 5, width = 4) => length * width;

console.log("Arrow Function Area (Custom 10x3):", area(10, 3));

function scopeTest() {
    if (true) {
        let blockVar = "Inside block";
        console.log(blockVar);
    }

    try {
        console.log(blockVar);
    } catch (error) {
        console.log("Scope Test Error:", error.toString());
    }
}

scopeTest();