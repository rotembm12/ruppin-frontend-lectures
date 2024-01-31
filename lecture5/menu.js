const menuBtn = document.querySelector(".mobile-nav button");

  
//   menuBtn.style.color = "yellow";
//   menuBtn.className = "bg-navy"


//   menuBtn.classList.add("some-class")
//   menuBtn.classList.remove("bg-red")
//   menuBtn.classList.toggle("some-class")

//   function doSomethingOnBtnClick() {
//     console.log("you clicked me");
//   }
  
//   menuBtn.addEventListener("click",doSomethingOnBtnClick)
//   menuBtn.addEventListener("click", function(){
//     console.log("you clicked - anonymous function")
//   })


function showMobileMenu() {
  const menu = document.querySelector(".mobile-nav .floating-menu");
  menu.style.transform = 'translateY(0%)'
}
// console.log(showMobileMenu);
// console.log(showMobileMenu())
menuBtn.addEventListener("click", showMobileMenu)




function hideMobileMenu() {
  const menu = document.querySelector(".mobile-nav .floating-menu");
  menu.style.transform = 'translateY(-120%)';
}

const closeMenuBtn = document.querySelector(".floating-menu button")
closeMenuBtn.addEventListener("click", hideMobileMenu)

// closeMenuBtn.addEventListener("click", function(){
//   const menu = document.querySelector(".mobile-nav .floating-menu");
//   menu.style.transform = 'translateY(-120%)'
// })
