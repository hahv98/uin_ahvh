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

//Generate Cart
function showCart() {
    //Unique products
    let uniqueItems = new Set(cart)
    let uniqueArr = [...uniqueItems]

    //Control of amount pr. product
    let cartItems = []
    uniqueArr.map(item => {
        cart.filter(i => i === item).length
        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length})
    })

    //Go through cartItems to make HTML for cart & total sum
    let cartHTML = ""
    let totalSum = 0
    cartItems.map(ci => {
        //Get product info
        let product = products.find(i => i.prodid === ci.prodid)
        //Print HTML
        cartHTML += 
            `<tr>
                <td class="title">${product.title}</td>
                <td class="price">kr. ${product.price},-</td>
                <td class="quantity">${ci.quantity}</td>
                <td class="delete"><button>X</button></td>
            </tr>`
    })
    document.getElementById("cart-items").innerHTML = cartHTML
}


// Add to Cart
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
    //Update cartlist
    showCart()
}