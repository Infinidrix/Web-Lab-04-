function add() {
    let numbers = promptMany();
    let sum = 0;
    if (numbers.length === 0) {
        alert("Empty input not allowed");
        return;
    }
    numbers.forEach(number => {
        sum += Number(number);
    });
    return (isNaN(sum)) ? sum : "Please input numbers only";
}

function mult() {
    let numbers = promptMany();
    let product = 1;
    if (numbers.length === 0) {
        alert("Empty input not allowed");
        return;
    }
    numbers.forEach(number => {
        product *= Number(number);
    });
    return (isNaN(product)) ? product : "Please input numbers only";
}

function div() {
    let [first, second, isNumeric] = promptTwo();
    if (Number(second) === 0) {
        alert("Invalid input");
        return;
    }
    return (isNumeric) ? Number(first) / Number(second) : "Please input numbers only";
}

function diff() {
    let [first, second, isNumeric] = promptTwo();
    return (isNumeric) ? Number(first) - Number(second) : "Please input numbers only";
}

function average() {
    let numbers = promptMany();
    let count = 0,
        sum = 0;
    if (numbers.length === 0) {
        alert("No numbers");
        return;
    }
    numbers.forEach(number => {
        count++;
        sum += Number(number);
    })

    return (sum / count) || "Please input numbers only";
}

function min() {
    let numbers = promptMany();
    if (numbers.length === 0) {
        alert("Empty input not allowed");
        return;
    }
    return Math.min(...numbers) || "Please input numbers only";
}

function max() {
    let numbers = promptMany();
    if (numbers.length === 0) {
        alert("Empty input not allowed");
        return;
    }
    return Math.max(...numbers) || "Please input numbers only";
}

function promptTwo() {
    let value = [];
    value.push(parseInt(prompt("Input first value")));
    value.push(parseInt(prompt("Input second value")));
    value.push(!isNaN(Math.min(...value)));
    return value;
}

function promptMany() {
    let values = [];
    let value = prompt("Input value to evaluate (q to exit)");
    while (value !== "q") {
        values.push(parseInt(value));
        value = prompt("Input value to evaluate (q to exit)");
    }
    return values;
}


(function() {
    var operation = prompt("Which operation do you want to use ( + - * / avg min max)");

    switch (operation) {
        case "+":
            console.log(add());
            break;
        case "-":
            console.log(diff());
            break;
        case "*":
            console.log(mult());
            break;
        case "/":
            console.log(div());
            break;
        case "avg":
            console.log(average());
            break;
        case "min":
            console.log(min());
            break;
        case "max":
            console.log(max());
            break;
        default:
            alert("Unknown operand")
            break;
    }
})()