function generateRandomString(length) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }
    return result;
}

function generateCaptcha() {
    const captchaContainer = document.getElementById('captchaContainer');
    const captchaText = generateRandomString(5);

    captchaContainer.innerHTML = `Введите:<strong>${captchaText}</strong>`;
    captchaContainer.dataset.captchaType = 'letters';
}

function generateNumberCaptcha() {
    const captchaContainer = document.getElementById('captchaContainer');
    const num1 = Math.floor(Math.random() * 25);
    const num2 = Math.floor(Math.random() * 25);

    captchaContainer.innerHTML = `Введите сумму: ${num1} + ${num2}`;
    captchaContainer.dataset.captchaType = 'numbers';
}

function checkCaptcha() {
    const captchaInput = prompt('Введите значение капчи:');
    const registerButton = document.getElementById('registerButton');
    const captchaContainer = document.getElementById('captchaContainer');
    const captchaType = captchaContainer.dataset.captchaType;

    if (!isEmpty(captchaInput)) {
        if (captchaType === 'letters') {
            const captchaText = captchaContainer.querySelector('strong').innerText;
            if (captchaInput === captchaText) {
                alert('Правильно! Капча пройдена.');
                registerButton.removeAttribute('disabled');
            } else {
                alert('Ошибка! Пожалуйста, попробуйте еще раз.');
                generateNumberCaptcha();
            }
        } else {
            const [num1, num2] = captchaContainer.innerText.match(/\d+/g);
            const expectedSum = parseInt(num1) + parseInt(num2);
            if (parseInt(captchaInput) === expectedSum) {
                alert('Правильно! Капча пройдена.');
                registerButton.removeAttribute('disabled');
            } else {
                alert('Ошибка! Пожалуйста, попробуйте еще раз.');
                generateCaptcha();
            }
        }
    } else {
        alert('Ошибка! Введите значение капчи.');
    }
}

function isEmpty(obj) {
    return !obj.trim();
}

generateCaptcha();



function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        const userInput = prompt('Введите число:');
        const parsedInput = parseFloat(userInput);

        if (!isNaN(parsedInput)) {
            this.value += parsedInput;
        } else {
            alert('Ошибка! Введите корректное число.');
        }
    };
}

const accumulator = new Accumulator(0);

function addToCart() {
    accumulator.read();
    updateCartValue();
}

function updateCartValue() {
    const cartValueContainer = document.getElementById('cartValueContainer');
    cartValueContainer.innerHTML = `Сумма в корзине: ${accumulator.value}`;
}




function truncate(element, maxlength) {
    const text = element.innerText;
    element.innerText = text.length > maxlength ? text.slice(0, maxlength) + '…' : text;
}

// Вызываем функцию truncate для каждого заголовка h13
truncate(document.getElementById('card1Title'), 15);
truncate(document.getElementById('card2Title'), 15);
truncate(document.getElementById('card3Title'), 15);