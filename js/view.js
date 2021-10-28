$(document).ready(function () {

    
    let product = JSON.parse(window.localStorage.getItem('product'))
console.log(product);
let cart = JSON.parse(window.localStorage.getItem('cart'))
console.log(cart);

    $('#card').append(`
    
            <img src="img/${product.img}" class="bd-placeholder-img card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${product.description} ${product.price}</p>
              </div>
              <button type="button" class="btn btn-outline-info " id='addCart'>add to cart</button>
             
              <input type="button" id='addOne' class="btn btn-outline-success" value="+">
              <label id="qty">1</label>
              <input type="button" id='subOne' class="btn btn-outline-danger" value="-">
     `)})
      

  