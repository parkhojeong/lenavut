const JS_ITEMLIST = document.querySelector(".js-itemList");
const BODY = document.querySelector("body");
var BASE_URL = "img/Product/";

// only necklace info
const necklaceFolder =
    [
        {name:"earth pendant",     number:3}
    ];

// only bracelet info
const braceletFolder =
    [
        {name:"earth pendant",     number:3}
    ];

// only ring info
const ringFolder =
    [
        {name:"basic ring",         number:6},
        {name:"g logo ring",        number:2},
        {name:"heart ring",           number:2},
        {name:"key ring",       number:2},
        {name:"manchu ring",   number:2},
    ];

// only etc info
const etcFolder =
    [
        {name:"earth pendant",     number:3}
    ];

// common use info 
const silver_925 = "silver 92.5";
const detail_info = 
    {        
        //necklace
        "earth pendant": {
            price:"30,000", 
            material: silver_925, 
            detail_info_text: ""
        },

        //bracelet
        "earth pendant": {
            price:"30,000", 
            material: silver_925, 
            detail_info_text: ""
        },

        //ring
        "basic ring"    : {
            price:"25,000", 
            material: silver_925, 
            detail_info_text: "착용시 다양한 느낌을 낼 수 있는 기본 은 반지 입니다. 두께는 1.5mm입니다."
        },
        "g logo ring"   : {
            price:"75,000", 
            material: silver_925, 
            detail_info_text: "알파벳 G 로고가 들어가 반지 입니다. 로고 알파벳은 변경 가능합니다."
        },
        "heart ring"      : {
            price:"25,000", 
            material: silver_925, 
            detail_info_text: "열쇠의 형상을 한 반지 입니다."
        },
        "key ring"  : {
            price:"25,000", 
            material: silver_925, 
            detail_info_text: "열쇠의 형상을 한 반지 입니다."
        },
        "manchu ring"  : {
            price:"25,000", 
            material: silver_925, 
            detail_info_text: ""
        },

        //etc
        "earth pendant": {
            price:"30,000", 
            material: silver_925, 
            detail_info_text: ""
        }
    }

// common use info 
var material_info = 
    {
        [silver_925]: "열쇠 형상을 하고 있는 반지입니다."
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

function appendATag(dl, innerText, class_name, href){
    const a = document.createElement("a");
    a.innerText = innerText;
    a.classList.add(class_name, "text");
    a.href = href;
    dl.appendChild(a);
}

function appendHrTag(dl){
    const hr = document.createElement("hr");
    hr.classList.add("text");
    dl.appendChild(hr);
}

// append text-area 
function appendSlideElement_texts(div_slideshow_container){
    var dl = document.createElement("dl");
    dl.classList.add("texts");

    const product_name = div_slideshow_container.childNodes[0].childNodes[0].alt;
    const material_name = detail_info[product_name]['material'];
    const dd_innerText = material_name + " \n";

    appendDiv(dl, product_name, "");
    appendDiv(dl, "price : "+detail_info[product_name]['price'], "" );
    appendATag(dl, "buy", "blackFont-hover-reserval", "https://open.kakao.com/o/se5DlxYb");
    appendHrTag(dl);
    appendDiv(dl, "material info\n", dd_innerText);
    appendDiv(dl, "detail info\n", detail_info[product_name]["detail_info_text"]);

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
    const src = item_type+ "/" + obj.name + "/" + i + ".png";
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