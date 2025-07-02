function adicionar() {
     //retrieve values, product name, quantity and values
     let getElement = document.getElementById.bind(document);
     
     let product = getElement('produto').value;
     let productName = product.split('-')[0];
     let productValue = product.split('R$')[1];
     let amount = getElement('quantidade');

     alert(`O nome do produto é ${productName}, custa ${productValue} na quantidade ${amount.value}`)

     //calculate price and subtotal
     let price = amount.value * productValue;
     alert(`O valor total do pedido é ${price}`)
     //Add to Cart

     //update total value
}

function limpar() {

}