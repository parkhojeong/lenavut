function init(){
    const MAIN = document.querySelector("main");
    MAIN.innerHTML=
    `
        <ul class="aside">
            <li><a href="product.html">All</a></li>
            <li><a href="necklace.html">Necklace</a></li>
            <li><a href="bracelet.html">bracelet</a></li>
            <li><a href="ring.html">ring</a></li>
            <li><a href="etc.html">etc</a></li>
        </ul>
        <div class="items">
            <ul class="js-itemList">

            </ul>
        </div>
    `;
}

init();