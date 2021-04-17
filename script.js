//PORTFOLIO FILTERS FROM HERE

const filtercontainer = document.querySelector(".portfolio-flt"),
    filterBtns = filtercontainer.children,
    totalfltbtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalfltbtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filtercontainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}

//PORTFOLIO SETTINGS AND LIGHTBOX

const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}
function nextItem() {
    if (itemIndex == totalPortfolioItem - 1) {
        itemIndex = 0;
    }
    else {
        itemIndex++;
    }
    changeItem();
}
function prevItem() {
    if (itemIndex == 0) {
        itemIndex = totalPortfolioItem - 1;
    }
    else {
        itemIndex--;
    }
    changeItem();
}
function toggleLightbox() {
    lightbox.classList.toggle("open");
}
function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML=(itemIndex+1)+" of "+totalPortfolioItem;
}

//CLOSE LIGHTBOX SETTINGS
lightbox.addEventListener("click",function(event){
    if(event.target===lightboxClose || event.target===lightbox ){
        toggleLightbox();
    }
})

//CLOSE LIGHTBOX SETTINGS AND LIGHTBOX

//BACK TO TOP
 
let btnUp = document.querySelector('.buttons-up');
btnUp.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior :"smooth"
    })
})

//HAMBURGER ACTIONS IN JAVASCRIPT STARTS FROM HERE

const hamBurger = document.querySelector(".hamburger");
hamBurger.addEventListener("click",function(){
    document.querySelector(".nav-bar").classList.toggle("show");
})

//CLOSE HAMBURGER ACTIONS OF JS

//NAVIGATION BAR RESPONSE & CONTENT INDICATING AT HEADER

const containerArray=document.querySelectorAll('section');
const containerPos={};
const containerPosition=document.querySelectorAll('container');

containerArray.forEach((container)=>{
    containerPos[container.id]=container.offsetTop;
});

window.onscroll=()=>{
    var scrollPosition=
    document.documentElement.scrollTop || document.body.scrollTop;
    for(id in containerPos){
        if(containerPos[id]<=scrollPosition){
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`a[href*=${id}]`).classList.add('active');
                                   //use tilde button for ( ` ) symbol
            document.querySelector("section").classList.remove('active');
        }
    }
};