import { clearCart } from "./utilities.js";
import { addevent } from "./utilities.js";
//furniture listing
const tableListing = [
    {
        img: "https://www.ikea.com/in/en/images/products/lack-coffee-table-black-brown__0835835_pe601383_s5.jpg?f=s",
        title: "Table",
        description: "Just a Table.",
        price: "9990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/knarrevik-bedside-table-black__0858309_pe678506_s5.jpg?f=s",
        title: "Teapoy",
        description: "I think it's not a teapoy.",
        price: "8990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/melltorp-table-white__1028690_pe835489_s5.jpg?f=s",
        title: "N'keda",
        description: "Small dining table for smart ppl.",
        price: "12,000"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/sandsberg-table-black__1056656_pe848458_s5.jpg?f=s",
        title: "G'keda",
        description: "Big dining table for ppl who love their family.",
        price: "18,990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/sandsberg-table-black__1056648_pe848450_s5.jpg?f=s",
        title: "Coup-ishy",
        description: "Table for ppl who dont need anybody else.",
        price: "9000"
    }
];
const bedroomListing = [
    {
        img: "https://www.ikea.com/in/en/images/products/gladstad-upholstered-bed-frame-kabusa-light-grey__1101393_pe866653_s5.jpg?f=s",
        title: "qek's",
        description: "queen size bed ig.",
        price: "9990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/kullen-chest-of-2-drawers-black-brown__0778036_pe758812_s5.jpg?f=s",
        title: "Sidble",
        description: "Bedside Table.",
        price: "8990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/songesand-wardrobe-brown__0858553_pe660181_s5.jpg?f=s",
        title: "kapet",
        description: "Ward-robe.",
        price: "12,000"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/songesand-chest-of-6-drawers-brown__0858247_pe658933_s5.jpg?f=s",
        title: "Al'mar",
        description: "Wood.",
        price: "18,990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/smastad-changing-table-white-with-frame-with-3-drawers__0936018_pe793060_s5.jpg?f=s",
        title: "Goo-goo-ga",
        description: "Storage for little ones.",
        price: "9000"
    }
];
const diningListing = [
    {
        img: "https://www.ikea.com/in/en/images/products/ekedalen-ingolf-table-and-4-chairs-white-white__1097859_pe865151_s5.jpg?f=s",
        title: "pand",
        description: "Fine wood Table.",
        price: "9990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg?f=s",
        title: "lakud",
        description: "Maple wood Table.",
        price: "8990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/melltorp-adde-table-and-2-chairs-white-white__0872092_pe716742_s5.jpg?f=s",
        title: "aikte",
        description: "It's a Date~",
        price: "12,000"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/ekedalen-ekedalen-table-and-4-chairs-dark-brown-orrsta-light-grey__0719960_pe732334_s5.jpg?f=s",
        title: "Mihan",
        description: "Dining Table.",
        price: "18,990"
    },
    {
        img: "https://www.ikea.com/in/en/images/products/ekedalen-ekedalen-table-with-2-chairs-and-bench-dark-brown-orrsta-light-grey__0719978_pe732352_s5.jpg?f=s",
        title: "Waait",
        description: "Call the ppl you hate on lunch.",
        price: "9000"
    }
];
function renderListing(list, element) {
    const imgLink = list;
    for (var i = 0; i < imgLink.length; i++) {
        var wrapperDiv = document.createElement("div");
        wrapperDiv.className = "wrapper";

        var cardFurnitureDiv = document.createElement("div");
        cardFurnitureDiv.className = "cardFurniture";
        var IMG = document.createElement("img");
        IMG.src = imgLink[i].img;

        var cardTextFurnitureDiv = document.createElement("div");
        cardTextFurnitureDiv.className = "cardTextFurniture";
        var title = document.createElement("b");
        title.textContent = imgLink[i].title;
        var description = document.createElement("p");
        description.textContent = imgLink[i].description;
        var priceDiv = document.createElement("div");
        priceDiv.innerHTML = `Rs.<p>${imgLink[i].price}</p>`;

        var iconDiv = document.createElement("div");
        iconDiv.className = "iconFurniture";
        iconDiv.id = "buyFurniture";  
        iconDiv.setAttribute('data-img', imgLink[i].img);
        iconDiv.setAttribute('data-title', imgLink[i].title);     
        iconDiv.setAttribute('data-price', imgLink[i].price);      
        var span = document.createElement("span");
        span.className = "material-symbols-outlined";
        span.textContent = "add_shopping_cart";

        iconDiv.appendChild(span);
        cardTextFurnitureDiv.appendChild(title);
        cardTextFurnitureDiv.appendChild(description);
        cardTextFurnitureDiv.appendChild(priceDiv);
        cardTextFurnitureDiv.appendChild(iconDiv);
        cardFurnitureDiv.appendChild(IMG);
        cardFurnitureDiv.appendChild(cardTextFurnitureDiv);
        wrapperDiv.appendChild(cardFurnitureDiv);

        element.appendChild(wrapperDiv);
    }
}

var TablePanel = document.getElementById("table");
renderListing(tableListing, TablePanel);

var BedroomPanel = document.getElementById("bedroom");
renderListing(bedroomListing, BedroomPanel);

var DiningPanel = document.getElementById("dining");
renderListing(diningListing, DiningPanel);

//clearing cart
var clearCartBtn = document.getElementById("clearCart");
clearCartBtn.addEventListener("click", clearCart);

addevent();