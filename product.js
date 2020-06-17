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

const detail_info = 
    {        
        "basic ring"    : {price:"25000", material: "sterling_silver"},
        "g rogo ring"   : {price:"25000", material: "sterling_silver"},
        "key ring"      : {price:"25000", material: "sterling_silver"},
        "scratch ring"  : {price:"25000", material: "sterling_silver"},
        "unconnected ring": {price:"25000", material: "sterling_silver"},
        "wood ring c"   : {price:"25000", material: "sterling_silver"}
        
    }
const material_info = 
    {
        sterling_silver: "순도 92.5%의 은과 구리를 섞어 순은보다 강도가 높고 무르지 않습니다. (은제품은 특성상 변색이 생길 수 있습니다.)"
    }
    

const body = document.querySelector("body");


function closeEventHandle(event){
    if(event.target.id === 'modal')
        body.removeChild(body.childNodes[0]);

}

function appendSlideElement_prev_next(div_slideshow_container){
    var a = document.createElement("a");
    a.classList.add("prev");
    a.setAttribute("onclick","minusSlide()");
    a.innerHTML = "&#10094;";
    div_slideshow_container.appendChild(a);

    a = document.createElement("a");
    a.classList.add("next");
    a.setAttribute("onclick","plusSlide()");
    a.innerHTML = "&#10095;";
    div_slideshow_container.appendChild(a);
}

function appendSlideElement_dots(div_slideshow_container){
    var div = document.createElement("div");
    div.classList.add("dots");
    div_slideshow_container.childNodes.forEach(function(node, i){
        if(node.classList.contains("mySlides")){

            var span = document.createElement("span");
            span.classList.add("dot");
            span.setAttribute("onclick","showSlides("+i+")");
            div.appendChild(span);
        }else{
            ;
        }
    });

    div_slideshow_container.appendChild(div);
}

function appendSlideElement_texts(div_slideshow_container){
    var dl = document.createElement("dl");
    
    var div = document.createElement("div");
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    div.classList.add("text");
    dt.classList.add("key");
    dd.classList.add("value");
    const name = div_slideshow_container.childNodes[0].childNodes[0].alt;
    dt.innerText = "제품명: ";
    dd.innerText = name;
    console.log();
    div.appendChild(dt);
    div.appendChild(dd);
    dl.appendChild(div);

    div = document.createElement("div");
    dt = document.createElement("dt");
    dd = document.createElement("dd");
    div.classList.add("text");
    dt.classList.add("key");
    dd.classList.add("value");
    dt.innerText = "가격: ";
    dd.innerText = detail_info[name]['price'];
    div.appendChild(dt);
    div.appendChild(dd);
    dl.appendChild(div);
    
    div = document.createElement("div");
    dt = document.createElement("dt");
    dd = document.createElement("dd");
    div.classList.add("text");
    dt.classList.add("key");
    dd.classList.add("value");
    dt.innerText = '재질: ';
    const material_name = detail_info[name]['material'];
    dd.innerText = material_name + " \n"+ material_info[material_name];
    div.appendChild(dt);
    div.appendChild(dd);
    dl.appendChild(div);

    dl.classList.add("texts");
    

    div_slideshow_container.appendChild(dl);
}

function clickEventHandle(event){
    const div_modal = document.createElement("div");
    const div_slideshow_container = document.createElement("div");
    
    const li = event.target.parentElement;
    const ul = li.parentElement;

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

    appendSlideElement_prev_next(div_slideshow_container);
    appendSlideElement_dots(div_slideshow_container);
    appendSlideElement_texts(div_slideshow_container);

    div_modal.appendChild(div_slideshow_container);
    body.prepend(div_modal);
    modal.addEventListener("click", closeEventHandle);
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