
// // Select elements
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const cartIcon = document.querySelector(".fa-cart-shopping");
// const cartCount = document.createElement("span");
// cartCount.classList.add("cart-count");
// cartCount.innerText = "0";
// cartIcon.appendChild(cartCount);
// let cartItems = 0;

// // Hamburger menu toggle
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
//   hamburger.innerHTML = navLinks.classList.contains("show")
//     ? '<i class="fa-solid fa-xmark"></i>'
//     : '<i class="fa-solid fa-bars"></i>';
// });

// // Search functionality
// document.getElementById("searchInput").addEventListener("input", function () {
//   let searchQuery = this.value.toLowerCase();
//   let allCards = document.querySelectorAll("#container div");

//   allCards.forEach((card) => {
//     let mealName = card.querySelector("h3").innerText.toLowerCase();
//     card.style.display = mealName.includes(searchQuery) ? "block" : "none";
//   });
// });

// // Fetch API data
// async function fetchApi() {
//   try {
//     let response = await fetch("http://localhost:3000/meals");
//     if (!response.ok) throw new Error("Failed to fetch");
//     let data = await response.json();
//     getData(data);

//   } catch (error) {
//     console.log(error);
//   }
// }

// // Displaying data
// function getData(data) {
//   let container = document.getElementById("container");
//   container.innerHTML = "";

//   data.forEach((meal) => {
//     let card = document.createElement("div");
//     card.innerHTML = `
//       <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//       <h3>${meal.strMeal}</h3>
//       <p>Price ${meal.price}/-</p>
//       <button class="add-to-cart">Add To Cart</button>
//       <button>Buy Now</button>
      
//     `;
//     container.appendChild(card);
//   });

//   // Add event listeners to 'Add to Cart' buttons
//   document.querySelectorAll(".add-to-cart").forEach((button) => {
//     button.addEventListener("click", () => {
//       cartItems++;
//       cartCount.innerText = cartItems;
//     });
//   });
// }

// // Filter functionality
// document.getElementById("foodName").addEventListener("change", function () {
//   let selectedCategory = this.value;
//   let allCards = document.querySelectorAll("#container div");

//   allCards.forEach((card) => {
//     let mealCategory = card.querySelector("h3").innerText;
//     if (selectedCategory === "all" || mealCategory.includes(selectedCategory)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });



// fetchApi();



//2nd code
// Search functionality
// document.getElementById("searchInput").addEventListener("input", function () {
//   let searchQuery = this.value.toLowerCase();
//   let allCards = document.querySelectorAll("#container div");

//   allCards.forEach((card) => {
//     let mealName = card.querySelector("h3").innerText.toLowerCase();
//     card.style.display = mealName.includes(searchQuery) ? "block" : "none";
//   });
// });

// // Fetch API data
// async function fetchApi() {
//   try {
//     let response = await fetch("http://localhost:3000/meals");
//     if (!response.ok) throw new Error("Failed to fetch");
//     let data = await response.json();
    
//     // Save data globally so we can filter it later
//     window.allMeals = data;
//     getData(data);

//   } catch (error) {
//     console.log(error);
//   }
// }

// // Function to display filtered data
// function getData(data) {
//   let container = document.getElementById("container");
//   container.innerHTML = "";

//   data.forEach((meal) => {
//     let card = document.createElement("div");
  
//     card.innerHTML = `
//       <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//       <h3>${meal.strMeal}</h3>
//       <p>Category: ${meal.strCategory}</p>
//       <p>Price ${meal.price}/-</p>
//       <button class="add-to-cart">Add To Cart</button>
//       <button>Buy Now</button>
//     `;
  
//     // Find the button within the card (use class)
//     let addToCartBtn = card.querySelector(".add-to-cart");
  
//     // Add click event
//     addToCartBtn.addEventListener("click", () => {
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
//       // Check for duplicates using idMeal
//       let exists = cart.some(item => item.idMeal === meal.idMeal);
  
//       if (!exists) {
//         cart.push(meal);
//         localStorage.setItem("cart", JSON.stringify(cart));
//         alert(`${meal.strMeal} added to cart!`);
//       } else {
//         alert(`${meal.strMeal} is already in the cart.`);
//       }
//     });
  
//     container.appendChild(card);
//   });
  

//   // // Add event listeners to 'Add to Cart' buttons
//   // document.querySelectorAll(".add-to-cart").forEach((button) => {
//   //   button.addEventListener("click", () => {
//   //     // cartItems++;
//   //     cartCount.innerText = cartItems;
//   //   });
//   // });
// }

// let icon =document.getElementById("icon")
// icon.addEventListener("click",()=>{
//   window.location.href="./addtocart.html"
// })



// // Filter functionality
// document.getElementById("foodName").addEventListener("change", function () {
//   let selectedCategory = this.value;
  
//   // Filter data before displaying
//   let filteredData = selectedCategory === "all"
//     ? window.allMeals
//     : window.allMeals.filter(meal => meal.strCategory.toLowerCase() === selectedCategory.toLowerCase());

//   getData(filteredData);
// });

// // Fetch initial data
// fetchApi();


// 3rd code


// // Select elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const cartIcon = document.querySelector(".fa-cart-shopping");
const cartCount = document.createElement("span");
cartCount.classList.add("cart-count");
cartCount.innerText = "0";
cartIcon.appendChild(cartCount);

// Initialize cart count from localStorage
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const purchases = JSON.parse(localStorage.getItem("purchases")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0) + 
                     purchases.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartCount.innerText = totalItems;
}

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Search functionality
document.getElementById("searchInput")?.addEventListener("input", function() {
  let searchQuery = this.value.toLowerCase();
  let allCards = document.querySelectorAll("#container div");

  allCards.forEach((card) => {
    let mealName = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = mealName.includes(searchQuery) ? "block" : "none";
  });
});

// Fetch API data
async function fetchApi() {
  try {
    let response = await fetch("https://paint-foil-green.glitch.me/meals");
    if (!response.ok) throw new Error("Failed to fetch");
    let data = await response.json();

    window.allMeals = data;
    getData(data);
  } catch (error) {
    console.error("Error fetching API:", error);
    // Fallback data or error handling
    document.getElementById("container").innerHTML = `
      <div class="error-message">
        <p>Failed to load meals. Please try again later.</p>
      </div>
    `;
  }
}

// Function to display filtered data
function getData(data) {
  let container = document.getElementById("container");
  if (!container) return;
  
  container.innerHTML = "";

  data.forEach((meal) => {
    let card = document.createElement("div");
    card.className = "meal-card";

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <p>Category: ${meal.strCategory}</p>
      <p>Price ₹${meal.price}/-</p>
      <button class="add-to-cart">Add To Cart</button>
      <button class="buy-now-btn" data-meal-id="${meal.idMeal}" 
              data-meal-name="${meal.strMeal}" 
              data-meal-price="${meal.price}" 
              data-meal-image="${meal.strMealThumb}">
        Buy Now
      </button>
    `;

    // Add to Cart functionality
    card.querySelector(".add-to-cart")?.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingIndex = cart.findIndex(item => item.idMeal === meal.idMeal);
      
      if (existingIndex === -1) {
        cart.push({...meal, quantity: 1});
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${meal.strMeal} added to cart!`);
      } else {
        cart[existingIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${meal.strMeal} quantity increased in cart!`);
      }
      updateCartCount();
    });

    // Buy Now functionality
    card.querySelector(".buy-now-btn")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      openBuyNowModal(
        btn.dataset.mealId,
        btn.dataset.mealName,
        btn.dataset.mealPrice,
        btn.dataset.mealImage
      );
    });

    container.appendChild(card);
  });
}

// Cart icon click handler
document.getElementById("icon")?.addEventListener("click", () => {
  window.location.href = "./addtocart.html";
});

// Buy Now Modal Functionality
function openBuyNowModal(id, name, price, image) {
  // Create modal element
  const modal = document.createElement("div");
  modal.className = "buy-now-modal";
  
  // Parse price to number
  price = parseFloat(price);
  
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h3>Confirm Purchase</h3>
      <div class="meal-info">
        <img src="${image}" alt="${name}" class="modal-meal-image">
        <div>
          <p><strong>${name}</strong></p>
          <p>Price: ₹${price.toFixed(2)}</p>
        </div>
      </div>
      <div class="quantity-control">
        <button class="quantity-btn minus">-</button>
        <span class="quantity">1</span>
        <button class="quantity-btn plus">+</button>
      </div>
      <div class="modal-actions">
        <button class="confirm-buy">Buy Now (₹${price.toFixed(2)})</button>
        <button class="cancel-buy">Cancel</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  // Quantity controls
  let quantity = 1;
  const updateTotalPrice = () => {
    modal.querySelector(".confirm-buy").textContent = `Buy Now (₹${(price * quantity).toFixed(2)})`;
  };

  modal.querySelector(".plus")?.addEventListener("click", () => {
    quantity++;
    modal.querySelector(".quantity").textContent = quantity;
    updateTotalPrice();
  });

  modal.querySelector(".minus")?.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      modal.querySelector(".quantity").textContent = quantity;
      updateTotalPrice();
    }
  });

  // Close modal
  const closeModal = () => {
    document.body.removeChild(modal);
    document.body.classList.remove("modal-open");
  };

  modal.querySelector(".close-button")?.addEventListener("click", closeModal);
  modal.querySelector(".cancel-buy")?.addEventListener("click", closeModal);
  modal.querySelector(".modal-overlay")?.addEventListener("click", closeModal);

  // Confirm purchase
  modal.querySelector(".confirm-buy")?.addEventListener("click", () => {
    const purchase = {
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: quantity,
      date: new Date().toISOString()
    };

    let purchases = JSON.parse(localStorage.getItem("purchases")) || [];
    const existingIndex = purchases.findIndex(item => item.id === id);
    
    if (existingIndex !== -1) {
      purchases[existingIndex].quantity += quantity;
    } else {
      purchases.push(purchase);
    }
    
    // Corrected the typo from "purchases" to "purchases"
    localStorage.setItem("purchases", JSON.stringify(purchases));
    
    // Remove from cart if exists
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.idMeal !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    updateCartCount();
    closeModal();
    
    // Show success message
    showSuccessMessage(`${quantity} ${quantity > 1 ? 'items' : 'item'} of ${name} purchased!`);
  });
}

function showSuccessMessage(message) {
  const successMsg = document.createElement("div");
  successMsg.className = "purchase-success";
  successMsg.innerHTML = `
    <div class="success-content">
      <i class="fas fa-check-circle"></i>
      <p>${message}</p>
    </div>
  `;
  document.body.appendChild(successMsg);
  
  setTimeout(() => {
    document.body.removeChild(successMsg);
  }, 3000);
}

// Filter functionality
document.getElementById("foodName")?.addEventListener("change", function() {
  let selectedCategory = this.value;
  let filteredData = selectedCategory === "all"
    ? window.allMeals
    : window.allMeals?.filter(meal => 
        meal.strCategory.toLowerCase() === selectedCategory.toLowerCase()
      ) || [];
  getData(filteredData);
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  fetchApi();
});