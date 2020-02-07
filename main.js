let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        price: 20,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        price: 20,
        inCart: 0
    }

];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartNumbers();
    })
}

function onLoadCatrNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.querySelector('.cart span').textContent =productNumbers;
    }
}

function cartNumbers() {
    let productNumber = localStorage.getItem('cartNumbers');

    productNumber = parseInt(productNumber);
    if (productNumber){
        localStorage.setItem('cartNumbers', `${productNumber + 1}`);
        document.querySelector('.cart span').textContent = `${productNumber + 1}`;
    }else {
        localStorage.setItem('cartNumbers', '1');
        document.querySelector('.cart span').textContent = 1;
    }
}
onLoadCatrNumbers();