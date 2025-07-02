function adicionar() {
     //retrieve values, product name, quantity and values
     let getElement = document.getElementById.bind(document);
     
     let product = getElement('produto').value;
     let productName = product.split('-')[0];
     let productValue = product.split('R$')[1];
     let amount = getElement('quantidade');

     //calculate price and subtotal
     let price = amount.value * productValue;
     
     //Add to Cart
     let cartList = getElement('lista-produtos');
     cartList.innerHTML = cartList.innerHTML + `<section class="carrinho__produtos__produto">
                                   <span class="texto-azul"> ${amount.value}x </span> ${productName} <span class="texto-azul">R$${price} </span>
                              </section>`

     //update total value
}

function limpar() {

}