let menuBtn = document.getElementById("hmbg");
let mobileBtn = document.getElementById("mobileBtn");

let mobileMenu = document.getElementById("mobileMenu");
let body = document.getElementById("body");

let menuLinkSetter = menuLinks.querySelectorAll("a");



const navBar = document.getElementById("mainNavbar");
const stickyOffset = navBar.offsetTop;

console.log(screenX);

function Iterate() {
    menuLinkSetter.forEach(function(linkItem){
        // to add an id to each link item what must be done is to use the add method of the classList property
        linkItem.classList.add("menuLink2");

        linkItem.addEventListener("click", function(){
            mobileMenu.classList.remove("active")
            
        })  
    })
}

Iterate();

console.log(menuLinkSetter);
console.log(menuLink);





/* let myArray = [1,2,3,4,"five"]

anotherArray = [4,5,"six"]

console.log(myArray, anotherArray);

if (myArray[0] < 4) {
    myArray.push("kek")
    anotherArray.push(6)
    console.log("hola");
    myArray.sort(String)
    console.log(myArray, anotherArray);
} else {
    
}*/

menuBtn.addEventListener("click", function click() {
    console.log("activado");
   // mobileMenu.style.display = "flex"; 
    mobileMenu.classList.add("active") 
})




mobileBtn.addEventListener("click", function click() {
    console.log("desactivado"); 
   // mobileMenu.style.display = "none"
    mobileMenu.classList.remove("active") 
})

function handleScroll(){
    if(window.pageYOffset > stickyOffset){
        navBar.classList.add("sticky");
    }
    else
    {
        navBar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);