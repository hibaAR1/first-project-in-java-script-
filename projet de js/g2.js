let products = {
  data: [
    {
      productName: "what is html?",
      category: "html",
      price: "30",
      image: "file:///C:/Users/21268/Desktop/g/html0.png",
    },
    
      {
        productName: "html in one our",
        category: "html",
        price: "29",
        image: "file:///C:/Users/21268/Desktop/g/html1.jpg",
      },
      {
        productName: "html courses",
        category: "html",
        price: "49",
        image: "file:///C:/Users/21268/Desktop/g/html2.png",
    },
    {
      productName: "html course absolut Beginners",
      category: "html",
      price: "67",
      image: "file:///C:/Users/21268/Desktop/g/html3.jpg",
    },
    
    {
      productName: "html couses",
      category: "html",
      price: "70",
      image: "file:///C:/Users/21268/Desktop/g/html4.png",
    },
    
      {
      productName: " css zero to hero",
      category: "css",
      price: "59",
      image: "file:///C:/Users/21268/Desktop/g/css0.png",
    }, 
    {
      productName: " css lets learn basics",
      category: "css",
      price: "49",
      image: "file:///C:/Users/21268/Desktop/g/css1.jpg",
    },
    {
      productName: "css font style",
      category: "css",
      price: "79",
      image: "file:///C:/Users/21268/Desktop/g/css2.jpg",
    },
    {
      productName: "css course",
      category: "css",
      price: "89",
      image: "file:///C:/Users/21268/Desktop/g/css3.jpg",
    },
    {
      productName: "css in one video",
      category: "css",
      price: "99",
      image: "file:///C:/Users/21268/Desktop/g/css4.jpg",
    },

    {
      productName: "php development",
      category: "php",
      price: "99",
      image: "file:///C:/Users/21268/Desktop/g/php0.jpg",
    },
    {
      productName: "php",
      category: "php",
      price: "89",
      image: "file:///C:/Users/21268/Desktop/g/php1.jpg",
    },
    {
      productName: "php full courses",
      category: "php",
      price: "199",
      image: "file:///C:/Users/21268/Desktop/g/php2.jpg",
    },
    {
      productName: "php couses",
      category: "php",
      price: "299",
      image: "file:///C:/Users/21268/Desktop/g/php3.jpg",
    },
    
   
    {
      productName: "js variabel",
      category: "js",
      price: "70",
      image: "file:///C:/Users/21268/Desktop/g/js0.jpg",
    },
   
    {
      productName: "js full courses",
      category: "js",
      price: "220",
      image: "file:///C:/Users/21268/Desktop/g/js1.webp",
    },
   
    {
      productName: "js learn more ",
      category: "js",
      price: "199",
      image: "file:///C:/Users/21268/Desktop/g/js2.jpg",
    },
    {
      productName: "js convert to json",
      category: "js",
      price: "189",
      image: "file:///C:/Users/21268/Desktop/g/js3.jpg",
    },
   
    {
      productName: "js full courses all what you need",
      category: "js",
      price: "200",
      image: "file:///C:/Users/21268/Desktop/g/js4.jpg",
    },
   

  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
 price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};