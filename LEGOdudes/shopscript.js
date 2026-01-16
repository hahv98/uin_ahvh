// Toggle cart visibility
document.getElementById("cart-btn").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("hidden");
})

// Function: Product listing
function fetchProd() {
    let productHTML = ""

    products.map(p => productHTML += 
        `<article class="prod-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}">
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>kr. ${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg til handlevogn</button>
        </article>`)


    document.getElementById("prod-list").innerHTML = productHTML
}

fetchProd()


// Add to Cart
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
}