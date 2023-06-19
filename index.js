//import images from "./data/imgLink.json" assert { type: 'json' };
//import assertions dont work in firefox
import { renderCart } from "./utilities.js";

const images = [
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/GliaHAJ3_5A"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/cc0Gg3BegjE"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/-aDGbdTsBZg"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/oCw5_evbWyI"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/z3QZ6gjGRt4"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/MP0bgaS_d1c"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/euBmypOZUZA"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/gEkgqBylc-U"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/M66lRZPX-hU"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/VgyN_CWXQVM"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/U6Ds9z7i3VQ"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/7MoDHYt7mkc"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/idXQEOxhmvU"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/zQJE2puzxOE"
    },
    {
        "type": "kitchen",
        "link": "https://source.unsplash.com/wWEQUGmbBrE"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/0dszrg9-V1o"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/xstTzTRiJ4k"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/7OeyNx69jfs"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/p4yWCNA2_6Q"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/EaexzaHDN98"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/JggpIf_rt4E"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/EPPbKZPN0rU"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/5BwyzkfgbWg"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/m0I_9vGQ0fw"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/tJ3C5jm7Xmo"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/4eld0s-hwoo"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/yoSb_GcodHo"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/rYZkQdz2t9o"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/tHT9AwECP74"
    },
    {
        "type": "dining",
        "link": "https://source.unsplash.com/zSeK2y2UFRw"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/YqFz7UMm8qE"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/WgkA3CSFrjc"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/fQgYAnWVFeo"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/OtXADkUh3-I"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/9M66C_w_ToM"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/l6u4GIKvxBs"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/HxRvdKHVAYY"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/iu4K1XPnNAY"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/q4jmjMMC2UU"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/RuCVvjuyNeQ"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/raxI_EcyfGw"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/5a7URgkummE"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/QGxBeUDkeWk"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/8e679XbGGy4"
    },
    {
        "type": "living",
        "link": "https://source.unsplash.com/rXshAn5b3Uk"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/7jlVQPX8PLE"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/IZwmKiyOdMI"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/0_RDFjGqasU"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/qd5yc3hpaco"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/Id2IIl1jOB0"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/w6ez7LKnDGo"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/GfvHuhw2Iqg"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/4Ly61P3EWVY"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/ghhDWuGK9QY"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/GqbU78bdJFM"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/WPuwLGQCxng"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/smhgyAnoVow"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/8ACHY29XXek"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/DhFHtkECn7Q"
    },
    {
        "type": "bedroom",
        "link": "https://source.unsplash.com/kyt0PkBSCNQ"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/3d4sSUChunA"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/-WBYxmW4yuw"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/Zg9R__O-8fM"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/sSWgOtIuXVU"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/D97n3LR5uN8"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/-8-2YWKt8Ag"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/fj31I5HoOIQ"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/pSmD3L7z8hs"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/RvPDe41lYBA"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/zCQsBI7ZltQ"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/ecRTOdoO7To"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/rDxfSzXyBqU"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/B4GwdlgTh5Y"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/5ibknxQ17tw"
    },
    {
        "type": "officetable",
        "link": "https://source.unsplash.com/slA9oP7RpZE"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/Aac7IlKnYX8"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/kSoe7EoxHIE"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/L4iRkKL5dng"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/P_0tnQ8hb70"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/HQCW1gTMjek"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/O7WjrXiKy_s"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/2X9H1lD_k2Q"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/kiV82HqGyTo"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/pVQM6vJg92M"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/qeIuFR5vPm8"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/FJLoqqIsSHc"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/U7PitHRnTNU"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/TWj0qbJn4zI"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/QhbtepGK5Yg"
    },
    {
        "type": "bathroom",
        "link": "https://source.unsplash.com/WbmX0pw_AuI"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/H9tFXVU9NPg"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/ZN_86cZrSN0"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/23coWmkTNSg"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/gma1zfS3_6E"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/4JhCV1YrG1o"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/mAWTLZIjI8k"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/GPpbS54veF8"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/wuVks6Ac-kA"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/q3o7KGZKmLs"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/YiLArpymKoA"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/kvmdsTrGOBM"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/aPoF91L-n6k"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/BdiWV88jQFg"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/hzdgFPz1V24"
    },
    {
        "type": "household",
        "link": "https://source.unsplash.com/dPzqzWI6AO8"
    }
];

var Images = images;

//hamburger menu
var ham = document.getElementById('hamburger');
var overlay = document.getElementById('blackOverlay');
overlay.addEventListener("click", hideShowBar);

ham.addEventListener('click', showSideBar);
function showSideBar() {
    var sideMenu = document.getElementById("otherPages");
    
    overlay.style.opacity = "60%";
    overlay.style.pointerEvents = "all"
    sideMenu.style.visibility = 'visible';
}
var closeButton = document.getElementById("sideMenuClose");
closeButton.addEventListener("click", hideShowBar);
function hideShowBar() {
    var sideMenu = document.getElementById("otherPages");

    overlay.style.opacity = "0%";
    overlay.style.pointerEvents = "none"
    sideMenu.style.visibility = 'hidden';
}

//cart
var Cart = document.getElementById('cart');
overlay.addEventListener("click", function () {
    var CartDiv = document.getElementById("cartDiv");

    overlay.style.opacity = "0%";
    overlay.style.pointerEvents = "none"
    CartDiv.style.visibility = "hidden";
});
Cart.addEventListener("click", function () {
    var CartDiv = document.getElementById("cartDiv");

    overlay.style.opacity = "60%";
    overlay.style.pointerEvents = "all"
    CartDiv.style.visibility = "visible";
    
    renderCart();
});
var CloseCart = document.getElementById("closeCart");
CloseCart.addEventListener("click", function () {
    var CartDiv = document.getElementById("cartDiv");
    
    overlay.style.opacity = "0%";
    overlay.style.pointerEvents = "none"
    CartDiv.style.visibility = "hidden";
});

//filter bar outline
var filterDiv = document.getElementsByClassName("filterBarDiv");

Array.prototype.forEach.call(filterDiv, function (fD) {
    fD.addEventListener("click", filterImages);
});

function filterImages() {
    Images = images;
    var filterDiv2 = document.getElementsByClassName("filterBarDiv");

    [...filterDiv2].forEach((fD) => {
        if (fD === this) {
            fD.classList.add("filterOutline");
        } else {
            if (fD.classList.contains("filterOutline")) {
                fD.classList.remove("filterOutline");
            }
        }
    });

    if (this.attributes.value.textContent == "all") {
        Images = images;
    } else {
        Images = Images.filter((img) => {
            return img.type == this.attributes.value.textContent;
        });
    }
    removeImages();
    renderImages();
}

renderImages()
function renderImages() {
    const imgLink = Images;
    for (var i = 0; i < imgLink.length; i++) {
        var IMG = document.createElement("img");
        IMG.src = imgLink[i].link;

        document.getElementById(`column-${i % 3 + 1}`).appendChild(IMG);
    }
}

function removeImages() {
    for (var i = 1; i < 4; i++) {
        var column = document.getElementById(`column-${i}`);
        column.innerHTML = '';
    }
}

var seeMoreButton = document.getElementById("seeMore");
seeMoreButton.addEventListener("click", expandGallery);
var expanded = false;

function expandGallery() {
    var galleryContainer = document.getElementById("row");

    if (expanded == false) {
        galleryContainer.style.height = "fit-content";
        seeMoreButton.textContent = "See Less";
        seeMoreButton.parentElement.style.background = "rgba(255,255,255,1)";
        expanded = true;
    }
    else if (expanded == true) {
        galleryContainer.style.height = "980px";
        seeMoreButton.textContent = "See More";
        expanded = false;
    }
}