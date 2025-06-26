fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("product-container");

    data.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "card bg-white rounded-2xl shadow overflow-hidden";
      card.setAttribute("data-aos", "zoom-in");
      card.setAttribute("data-aos-delay", `${100 + index * 100}`);

      card.innerHTML = `
        <a href="${product.image}" data-lightbox="bags" data-title="${product.name}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-cover">
        </a>
        <div class="p-4">
          <h2 class="serif text-xl mb-2">${product.name}</h2>
          <p class="text-sm mb-2">₹${product.price}</p>
          <a href="product.html" class="text-sm underline text-[#4B2E2A] hover:text-[#2f1a18] transition-colors">View Details</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error fetching products:", err);
  });
