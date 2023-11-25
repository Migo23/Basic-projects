let accountBalance = 2137;

function login() {
    const cardNumber = document.getElementById('card-number').value;
    const pin = document.getElementById('pin').value;

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('atm-container').style.display = 'block';

    updateBalance();
}

function updateBalance() {
    document.getElementById('balance').innerText = `Stan konta: ${accountBalance} zł`;
}

function withdraw() {
    const amount = parseInt(document.getElementById('amount').value);

    if (amount > 0 && amount <= 2000) {
        if (accountBalance >= amount) {
            accountBalance -= amount;
            updateBalance();
            alert(`Wypłacono ${amount} zł`);
        } else {
            alert('Brak wystarczających środków na koncie.');
        }
    } else {
        alert('Wprowadź poprawną kwotę (1-2000 zł).');
    }
}

function deposit() {
    const amount = parseInt(document.getElementById('amount').value);

    if (amount > 0 && amount <= 2000) {
        accountBalance += amount;
        updateBalance();
        alert(`Wpłacono ${amount} zł`);
    } else {
        alert('Wprowadź poprawną kwotę (1-2000 zł).');
    }
}
