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
        "type": "kitchen", 
        "link": "https://source.unsplash.com/0dszrg9-V1o"
    },
    {
        "type": "kitchen", 
        "link": "https://source.unsplash.com/xstTzTRiJ4k"
    }
]
const imgLink = images;

for (var i=1; i < imgLink.length; i++){
    var IMG = document.createElement("img");
    IMG.src = imgLink[i].link;

    document.getElementById(`column-${i%3+1}`).appendChild(IMG);
}
