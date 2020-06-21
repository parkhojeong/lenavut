const JS_ITEMLIST = document.querySelector(".js-itemList");
const BODY = document.querySelector("body");
var BASE_URL = "img/Product/Product/";

// only necklace info
const necklaceFolder =
    [
        {name:"basic necklace",     number:2}
    ];

// only bracelet info
const braceletFolder =
    [
        {name:"basic bracelet", number:2}
    ];

// only ring info
const ringFolder =
    [
        {name:"basic ring",         number:2},
        {name:"g rogo ring",        number:2},
        {name:"key ring",           number:3},
        {name:"scratch ring",       number:2},
        {name:"unconnected ring",   number:6},
        {name:"wood ring c",        number:2},
    ];

// only etc info
const etcFolder =
    [
        {name: "igloo", number:4}
    ];

// common use info 
const detail_info = 
    {        
        //necklace
        "basic necklace": {price:"30,000", material: "SILVER 92.5"},

        //bracelet
        "basic bracelet": {price:"30,000", material: "SILVER 92.5"},

        //ring
        "basic ring"    : {price:"25,000", material: "SILVER 92.5"},
        "g rogo ring"   : {price:"25,000", material: "SILVER 92.5"},
        "key ring"      : {price:"25,000", material: "SILVER 92.5"},
        "scratch ring"  : {price:"25,000", material: "SILVER 92.5"},
        "unconnected ring": {price:"25,000", material: "SILVER 92.5"},
        "wood ring c"   : {price:"25,000", material: "SILVER 92.5"},

        //etc
        "igloo"     :{price:"25,000", material: "SILVER 92.5"}
    }

// common use info 
var material_info = 
    {
        "SILVER 92.5": "열쇠 형상을 하고 있는 반지입니다."
    }
    
// modal background click event    
function closeEventHandle(event){
    if(event.target.id === 'modal')
        BODY.removeChild(BODY.childNodes[0]);

}

// '<' button add  
function appendSlideElement_prev(div_slideshow_container){
    var a = document.createElement("a");
    a.classList.add("prev");
    a.setAttribute("onclick","minusSlide()");
    a.innerHTML = "&#10094;";
    div_slideshow_container.appendChild(a);
}

// '>' button add
function appendSlideElement_next(div_slideshow_container){
    var a = document.createElement("a");
    a.classList.add("next");
    a.setAttribute("onclick","plusSlide()");
    a.innerHTML = "&#10095;";
    div_slideshow_container.appendChild(a);
}

// make 'o' button
function makeDot(i){
    var span = document.createElement("span");
    span.classList.add("dot");
    span.setAttribute("onclick","showSlides("+i+")");
    return span;
}

// append multiple dot
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

// append explanation text 
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

// append text-area 
function appendSlideElement_texts(div_slideshow_container){
    var dl = document.createElement("dl");
    dl.classList.add("texts");

    const product_name = div_slideshow_container.childNodes[0].childNodes[0].alt;
    const material_name = detail_info[product_name]['material'];
    const dd_innerText = material_name + " \n"+ material_info[material_name];

    appendDiv(dl, " ", product_name);
    appendDiv(dl, "PRICE : ", detail_info[product_name]['price']);
    appendDiv(dl, "MATERIAL INFO : ", dd_innerText);

    div_slideshow_container.appendChild(dl);
}

//  callback function for product image click
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
    BODY.prepend(div_modal);
    showSlides(0);
}

// append product image  
function appendItems(items){
    items.forEach(function(item){
        const li = document.createElement("li");
        item.forEach(function(image){
            li.appendChild(image);
        });
        JS_ITEMLIST.appendChild(li);
    });
}

// get image by url 
function getImage(obj, i, item_type){
    const image = new Image();
    const src = item_type+ "/" + obj.name + "/" + i + ".jpg";
    image.src = BASE_URL+ src;
    image.alt = obj.name;
    i == 1 ? image.classList.add("SHOW") : image.classList.add("HIDDEN");
    if(i===1) image.addEventListener("click", clickEventHandle);
    return image;
}

// get items by directory
function getItems(info_folder, item_type){
    const items = [];
    
    info_folder.forEach(function(obj){
        const item = [];
        for(var i = 1; i< obj.number+1; i++){
           const image = getImage(obj, i, item_type) ;
           item.push(image);
       }
       items.push(item)
    });

    return items;                    
}