let bankAccounts = [32000, 5000, 900, 0, 100];

function withdraw() {
    let accountNo = promptAccount();
    let amount = promptAmount();
    if (accountNo == NaN || amount == NaN) {
        alert("One of the inputs is not a number");
        return;
    }
    if (accountNo >= bankAccounts.length || bankAccounts[accountNo] < amount) {
        alert("Invalid operation for account Number");
        return;
    }
    bankAccounts[accountNo] -= amount;
    alert(`Successfully withdrawn! Balance: ${bankAccounts[accountNo]}`);
    return;
}

function deposit() {
    let accountNo = promptAccount();
    let amount = promptAmount();
    if (accountNo == NaN || amount == NaN) {
        alert("One of the inputs is not a number");
        return;
    }
    if (accountNo >= bankAccounts.length) {
        alert("Invalid account number");
    }

    bankAccounts[accountNo] += amount;
    alert(`Successfully deposited! Balance: ${bankAccounts[accountNo]}`);
    return;
}

function balance() {
    let accountNo = promptAccount();
    if (accountNo == NaN) {
        alert("One of the inputs is not a number");
        return;
    }
    if (accountNo >= bankAccounts.length) {
        alert("Invalid account number");
        return;
    }
    alert(`Balance: ${bankAccounts[accountNo]}`);
    return;
}

function transfer() {
    const MAX_TRANSFER = 10000,
        MIN_TRANSFER = 100;
    let accountNoFirst = promptAccount();
    let accountNoSecond = promptAccount();
    let amount = promptAmount();

    if (accountNoFirst == NaN || accountNoSecond == NaN || amount == NaN) {
        alert("One of the inputs is not a number");
    } else if (accountNoFirst >= bankAccounts.length || accountNoSecond >= bankAccounts.length) {
        alert("Invalid account number");
    } else if (amount > bankAccounts[accountNoFirst] || amount > MAX_TRANSFER || amount < MIN_TRANSFER) {
        alert("Can't transfer this much money");
    } else {
        bankAccounts[accountNoFirst] -= amount;
        bankAccounts[accountNoSecond] += amount;
        alert(`Transfer was successful! Sender balance: ${bankAccounts[accountNoFirst]}`);
    }

}

function promptAccount() {
    return parseInt(prompt("Please input the account number"));
}

function promptAmount() {
    return parseInt(prompt("Please input the amount"))
}


(function() {
    var options = { withdraw, deposit, transfer, balance }
    var operation = prompt("Which operation do you want to use ( deposit, balance, withdraw, transfer )");
    while (true) {
        if (options[operation]) {
            options[operation]();
            operation = prompt("Which operation do you want to use ( deposit, balance, withdraw, transfer )");
        } else {
            alert("Unknown operation");
            return;
        }
    }
})()