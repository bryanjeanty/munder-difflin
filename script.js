let index = 0;

function slideShow() {
    let quote = document.getElementsByClassName('quotes');
    for (let i = 0; i < quote.length; ++i) {
        quote[i].style.display = 'none';
    }

    index++;
    if (index > quote.length) {
        index = 1;
    }
    quote[index - 1].style.display = 'block';
    setTimeout(slideShow, 4500);
}

slideShow();

let cart = document.getElementById('cart');
cart.addEventListener('click', () => {
    alert('Your cart is empty!');
}, false);

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    alert('Thank you for subscribing to our newsletter!');
    document.email.value = "";
}, false);

let view = document.getElementsByClassName('view');
for(let i = 0; i < view.length; ++i) {
    view[i].addEventListener('click', () => {
        alert(`
        Sorry page is not current available!
        Please wait 5 minutes and try again...`);
    }, false);
}