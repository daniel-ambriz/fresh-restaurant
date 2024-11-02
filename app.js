
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function () {

  // classList property returns the CSS classnames of an element
  links.classList.toggle("show-links");
});

// Toggle nav menu when user clicks a nav link
links.addEventListener("click", function () {

  links.classList.toggle("show-links");
});


// Reorganized code to make it compatible with filtering
const menu = [
  {
    id: 1,
    title: "Deer Rancher",
    category: "carnivore",
    price: 15.99,
    img: "./images/item-1.jpg",
    desc: `Premium smoked venison burger from our local deer farm. Free range, grass fed, and 110% organic.`,
  },
  {
    id: 2,
    title: "BBQ'd Carls Burger",
    category: "veggie",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Our most popular veggie burger that carries nostalgic char broiled flavors guaranteed to leave you craving for more. `,
  },
  {
    id: 3,
    title: "Crispy Farm Fries",
    category: "sides",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `Locally grown potatoes make the best side of fries. Organic earthy flavor with your choice of ketchup.`,
  },
  {
    id: 4,
    title: "Protein Burger",
    category: "carnivore",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Wild bison, pasture raised chicken egg, and locally produced cheese make up this body builder's dream burger. `,
  },
  {
    id: 5,
    title: "Muncher's Dream",
    category: "veggie",
    price: 22.99,
    img: "./images/item-5.jpg",
    desc: `100% Organic Soy pattie with almonds and walnuts. One of our most popular for both carnivores and vegetarians. `,
  },
  {
    id: 6,
    title: "Garlic Potato Wedges",
    category: "sides",
    price: 18.99,
    img: "./images/item-6.jpg",
    desc: `Chef's secret seasoning enhances our locally grown russet potato wedges to leave you satisfied.`,
  },
  {
    id: 7,
    title: "Turkey Bacon Daydream",
    category: "carnivore",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Killing two birds with one stone doesn't have to mean running errands. This turkey bacon, chicken, and egg filled buscut is a classic. `,
  },
  {
    id: 8,
    title: "Mushroom-Onion Burger",
    category: "veggie",
    price: 12.99,
    img: "./images/item-8.jpg",
    desc: `This mushroom burger has just the perfect amount and type of seasonings to make your visit a significant life's memory. `,
  },
  {
    id: 9,
    title: "Cheesy Potato Wedges",
    category: "sides",
    price: 16.99,
    img: "./images/item-9.jpg",
    desc: `Don't forget to treat yourself with the best cheesy wedges in town. Your taste buds will become your best friends.`,
  },
  {
    id: 10,
    title: "Bottomless Spaghetti Fries",
    category: "sides",
    price: 19.99,
    img: "./images/item-10.jpg",
    desc: `We offer bottomless Spaghettie Fries for dine-in. Carry-out orders get a generous serving that feeds 3.`,
  },
];

/* section-center is parent element */
const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

// load items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
});

// filter items
// click on All button and notice the console logs the 
// dataset that is defined in the html with data-
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;//id is what I named the value of data- in the html
    const menuCategory = menu.filter(function(menuItem){
      // matching item category with variable category
      if (menuItem.category === category){
        return menuItem;
      }
    
    });
    // this will return all the items no matter which btn press
    //console.log(menuCategory);

    if (category === 'all'){
      displayMenuItems(menu)
    }
    else displayMenuItems(menuCategory);
  });
});

// Display all items
function displayMenuItems(menuItems){
  // map method is like filter except you can make changes
  let displayMenu = menuItems.map(function(item){

    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
  });
  //displayMenu was given local scope with let but we'll override
  //join all items into one string and remove commas
  displayMenu = displayMenu.join("");
  
  //console.log(displayMenu);

  // add items to the page
  sectionCenter.innerHTML = displayMenu;
}
// Pick up at 2:56:01
// Need to make script dynamic in case we add items



// For button active
// Get the container element
var btnContainer = document.getElementById("btn-container");

// Get all buttons with class="filter-btn"
var btns = btnContainer.getElementsByClassName("filter-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
} 