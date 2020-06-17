const ITEMS = document.querySelector(".js-itemList");

const BASE_URL = "img/Product/Product/";
const ringFolder =
    [
        {name:"basic ring",         number:2},
        {name:"g rogo ring",        number:2},
        {name:"key ring",           number:3},
        {name:"scratch ring",       number:2},
        {name:"unconnected ring",   number:6},
        {name:"wood ring c",        number:2}
    ];
const body = document.querySelector("body");

function closeEventHandle(event){
    if(event.target.id === 'modal')
        body.removeChild(body.childNodes[0]);
    console.log(event);
    console.log(event.target.id);
}

function clickEventHandle(event){
    const modal = document.createElement("li");
    const li = event.target.parentElement;

    const ul = li.parentElement;
    li.childNodes.forEach(function(img){
        modal.appendChild(img.cloneNode(true));
    });
    modal.id = "modal";
    body.prepend(modal);
    modal.addEventListener("click", closeEventHandle);
}

function getRing(){
    const rings = [];
        
    ringFolder.forEach(function(obj){
        const ring = [];
       for(var i = 1; i< obj.number+1; i++){
           const image = new Image();
           const src = "ring/" + obj.name + "/" + i + ".jpg";
           image.src = BASE_URL+ src;
           image.alt = obj.name;
           i == 1 ? image.classList.add("SHOW") : image.classList.add("HIDDEN");
           if(i===1) image.addEventListener("click", clickEventHandle);
           ring.push(image);
       }
       rings.push(ring)
    });

    return rings;                    
}

function appendImage(items){
    items.forEach(function(item){
        const li = document.createElement("li");
        item.forEach(function(image){
            li.appendChild(image);
        });
        ITEMS.appendChild(li);
    });
}

function paintItem(){
    const rings = getRing();
    appendImage(rings);
    
}
function init(){
    paintItem();
}

init();