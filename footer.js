function pushFooterContent(){
    const FOOTER = document.querySelector('footer');
    FOOTER.innerHTML = 
    `
    <div class="line1">
        <span>TEL. 010-2696-9879</span>
        <span> LE NAVUT (르나부트)</span>
        <span> 신한 110-388-213305 (임재우)</span>
    </div>
    <div class="line2">
        <span><a href="product.html" class="BLUR_BUTTON">SHOP</a></span>
        <span><a href="about.html" class="BLUR_BUTTON">ABOUT</a></span>
        <span><a href="notice.html" class="BLUR_BUTTON">NOTICE</a></span>
        <span><a href="https://www.instagram.com/lenavut/" target="blank"><i class="fab fa-instagram BLUR_BUTTON"></i></a></span>
    </div>
    `
}

function init(){
    const HEADER = document.querySelector("header");
    const MAIN = document.querySelector("main");
    const FOOTER = document.querySelector("footer");
    if(window.innerHeight < HEADER.offsetHeight + MAIN.offsetHeight + FOOTER.offsetHeight){
        FOOTER.classList.add("RELATIVE");
        // console.log("relative");
    }else{
        FOOTER.classList.add("ABSOLUTE");
        // console.log("absolute");
    }
    // console.log(HEADER.offsetHeight + MAIN.offsetHeight + FOOTER.offsetHeight);

    pushFooterContent();
}

init();