//import images from "./data/imgLink.json" assert { type: 'json' };
//import assertions dont work in firefox
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
        "type": "dining", 
        "link": "https://source.unsplash.com/0dszrg9-V1o"
    },
    {
        "type": "dining", 
        "link": "https://source.unsplash.com/xstTzTRiJ4k"
    }
]
var Images = images;

//filter bar outline
var filterDiv = document.getElementsByClassName("filterBarDiv");

Array.prototype.forEach.call(filterDiv, function(fD) {
    fD.addEventListener("click", filterImages);
});

function filterImages(){
    Images = images;
    var filterDiv2 = document.getElementsByClassName("filterBarDiv");
    
    [...filterDiv2].forEach((fD) => {
        if(fD === this){
            fD.classList.add("filterOutline");
        } else {
            if(fD.classList.contains("filterOutline")){
                fD.classList.remove("filterOutline");
            }
        }
    });

    if(this.attributes.value.textContent == "all"){
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
function renderImages(){
    const imgLink = Images;
    for (var i=0; i < imgLink.length; i++){
        var IMG = document.createElement("img");
        IMG.src = imgLink[i].link;
        
        document.getElementById(`column-${i%3+1}`).appendChild(IMG);
    }
}

function removeImages(){
    for (var i=1; i<4; i++){
        var column = document.getElementById(`column-${i}`);
        column.innerHTML = '';
    }
}

var seeMoreButton = document.getElementById("seeMore");
seeMoreButton.addEventListener("click", expandGallery);
var expanded = false;

function expandGallery(){
    var galleryContainer = document.getElementById("row");
    
    if (expanded == false){
        galleryContainer.style.height = "fit-content";
        seeMoreButton.textContent = "See Less";
        seeMoreButton.parentElement.style.background = "rgba(255,255,255,1)";
        expanded = true;
    }
    else if (expanded == true){
        galleryContainer.style.height = "980px";
        seeMoreButton.textContent = "See More";
        expanded = false;
    }
}