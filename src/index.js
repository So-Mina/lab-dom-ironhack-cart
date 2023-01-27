// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const quantityPrice = price * quantity
    
  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerHTML = quantityPrice

  return quantityPrice
}

function calculateAll() {
  // ITERATION 2
  let everyProduct = document.getElementsByClassName('product');

  let sumOfAll = 0

  for(let i = 0; i < everyProduct.length; i++){
    sumOfAll += updateSubtotal(everyProduct[i])
  }

  // ITERATION 3
  let finalTotal = document.querySelector("#total-value span")
  finalTotal.innerHTML = sumOfAll


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removerBtn = document.querySelectorAll(".btn-remove");
  removerBtn.forEach((btns) => btns.addEventListener("click", removeProduct));
})
