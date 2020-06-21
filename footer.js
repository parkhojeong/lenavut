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
}

init();