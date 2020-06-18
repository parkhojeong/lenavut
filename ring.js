const ITEMS = document.querySelector(".js-itemList");

var BASE_URL = "img/Product/Product/";
const ringFolder =
    [
        {name:"basic ring",         number:2},
        {name:"g rogo ring",        number:2},
        {name:"key ring",           number:3},
        {name:"scratch ring",       number:2},
        {name:"unconnected ring",   number:6},
        {name:"wood ring c",        number:2},
        
    ];

const necklaceFolder =
    [
        {name:"basic necklace",     number:2}
    ];

const detail_info = 
    {        
        "basic ring"    : {price:"25000", material: "sterling_silver"},
        "g rogo ring"   : {price:"25000", material: "sterling_silver"},
        "key ring"      : {price:"25000", material: "sterling_silver"},
        "scratch ring"  : {price:"25000", material: "sterling_silver"},
        "unconnected ring": {price:"25000", material: "sterling_silver"},
        "wood ring c"   : {price:"25000", material: "sterling_silver"},
        "basic necklace": {price:"30000", material: "sterling_silver"}
    }
var material_info = 
    {
        sterling_silver: "순도 92.5%의 은과 구리를 섞어 순은보다 강도가 높고 무르지 않습니다. (은제품은 특성상 변색이 생길 수 있습니다.)"
    }
    
const body = document.querySelector("body");

function closeEventHandle(event){
    if(event.target.id === 'modal')
        body.removeChild(body.childNodes[0]);

}

function appendSlideElement_prev(div_slideshow_container){
    var a = document.createElement("a");
    a.classList.add("prev");
    a.setAttribute("onclick","minusSlide()");
    a.innerHTML = "&#10094;";
    div_slideshow_container.appendChild(a);
}

function appendSlideElement_next(div_slideshow_container){
    var a = document.createElement("a");
    a.classList.add("next");
    a.setAttribute("onclick","plusSlide()");
    a.innerHTML = "&#10095;";
    div_slideshow_container.appendChild(a);
}

function makeDot(i){
    var span = document.createElement("span");
    span.classList.add("dot");
    span.setAttribute("onclick","showSlides("+i+")");
    return span;
}

function appendSlideElement_dots(div_slideshow_container){
    var dots = document.createElement("div");
    dots.classList.add("dots");
    div_slideshow_container.childNodes.forEach(function(node, i){
        if(node.classList.contains("mySlides")){
            const dot = makeDot(i);
            dots.appendChild(dot);
        }
    });
    div_slideshow_container.appendChild(dots);
}

function appendDiv(dl, dt_innerText, dd_innerText){

    var div = document.createElement("div");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");

    div.classList.add("text");
    dt.classList.add("key");
    dd.classList.add("value");

    dt.innerText = dt_innerText;
    dd.innerText = dd_innerText;

    div.appendChild(dt);
    div.appendChild(dd);
    dl.appendChild(div);
}

function appendSlideElement_texts(div_slideshow_container){
    var dl = document.createElement("dl");
    dl.classList.add("texts");

    const product_name = div_slideshow_container.childNodes[0].childNodes[0].alt;
    const material_name = detail_info[product_name]['material'];
    const dd_innerText = material_name + " \n"+ material_info[material_name];

    appendDiv(dl, "제품명", product_name);
    appendDiv(dl, "가격", detail_info[product_name]['price']);
    appendDiv(dl, "재질", dd_innerText);

    div_slideshow_container.appendChild(dl);
}

function clickEventHandle(event){
    const div_modal = document.createElement("div");
    const div_slideshow_container = document.createElement("div");
    const li = event.target.parentElement;

    div_modal.id = "modal";
    div_slideshow_container.classList.add("slideshow-container");

    li.childNodes.forEach(function(img, i){
        const div = document.createElement("div");
        // i == 0 ? div.style.display = "block" : div.style.display="none";
        
        div.classList.add("mySlides");
        const img_clone = img.cloneNode(true);
        img_clone.classList.remove("SHOW");
        img_clone.classList.remove("HIDDEN");

        div.appendChild(img_clone);
        div_slideshow_container.appendChild(div);
    });

    appendSlideElement_prev(div_slideshow_container);
    appendSlideElement_next(div_slideshow_container);
    appendSlideElement_dots(div_slideshow_container);
    appendSlideElement_texts(div_slideshow_container);

    div_modal.appendChild(div_slideshow_container);
    div_modal.addEventListener("click", closeEventHandle);
    body.prepend(div_modal);
    showSlides(0);
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