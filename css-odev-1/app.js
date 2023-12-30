const productdiv = document.querySelector("#product-id");

const product = [
  {
    name: "Road Bike",
    price: "1000$",
    image: "./public/bike1.jpg",
    desc: "Ideal for speed enthusiasts, the road bike is a perfect choice for long-distance rides with its sleek design and lightweight structure.",
  },
  {
    name: "Mountain Bike",
    price: "1000$",
    image: "./public/bike2.png",
    desc: "Designed for performance on challenging terrains, the mountain bike excels with its durable frame and specialized wheels, making it perfect for adventurous off-road rides.",
  },
  {
    name: "Gravel Bike",
    price: "1000$",
    image: "./public/bike3.jpg",
    desc: "The gravel bike, capable of riding comfortably on various terrains, offers versatile design and powerful brakes for a safe ride in any condition.",
  },
  {
    name: "City Bike",
    price: "1000$",
    image: "./public/bike4.jpeg",
    desc: "Suited for city life, the city bike enhances your short commutes with its stylish and practical design, providing comfort and convenience.",
  },
];

function productLister(product) {
  let displayMenu = product.map((bike) => {
    return `<div class="product-card" style="padding:45px;">
             <img
               class="image"
               src=${bike.image}
               alt=${bike.name}
             />
             <div class="menu-info">
               <div class="menu-title">
                 <h4 class="sub-title">${bike.name}</h4>
                 <p>${bike.desc}</p>
                 <h4>${bike.price}</h4>
               </div>
               <div class="menu-text">
               </div>
             </div>
           </div>
        `;
  });
  displayMenu = displayMenu.join("");
  productdiv.innerHTML = displayMenu;
}

productLister(product);
