//    features dropdown 
 
 document.querySelector(".down").addEventListener("click", ()=> {
    document.querySelector(".features-drop").style.display = "grid";
    
    document.querySelector(".up").style.display = "grid";
    document.querySelector(".down").style.display = "none";

 });

 document.querySelector(".up").addEventListener("click", ()=> {
    document.querySelector(".features-drop").style.display = "none";
    
    document.querySelector(".up").style.display = "none";
    document.querySelector(".down").style.display = "grid";
 });


//    company dropdown 

document.querySelector(".down2").addEventListener("click", ()=> {
    document.querySelector(".company-drop").style.display = "flex";
    document.querySelector(".up2").style.display = "grid";
    document.querySelector(".down2").style.display = "none";

 });

 document.querySelector(".up2").addEventListener("click", ()=> {
    document.querySelector(".company-drop").style.display = "none";
    document.querySelector(".up2").style.display = "none";
    document.querySelector(".down2").style.display = "grid";
 });

 const openSideBar = document.querySelector(".menu");
const slideLinks = document.querySelectorAll(".slide-link");
const deem = document.querySelector(".deem");
const sideBar = document.querySelector(".slide-bar");
const closeMenu = document.querySelector("#close-menu");

openSideBar.addEventListener('click', ()=> {
    sideBar.classList.add("slide-bar-open");
    slideLinks.forEach((link)=> link.classList.add("open-navlinks"));
    deem.classList.add("deem_page");
});

// close side bar
closeMenu.addEventListener('click', ()=> {
    sideBar.classList.remove("slide-bar-open");
    deem.classList.remove("deem_page");
});


//   mobile features dropdown 

document.querySelector(".mobile-down1").addEventListener("click", ()=> {
   document.querySelector(".mobile-features-drop").style.display = "grid";
   
   document.querySelector(".mobile-up1").style.display = "inline";
   document.querySelector(".mobile-down1").style.display = "none";

});

document.querySelector(".mobile-up1").addEventListener("click", ()=> {
   document.querySelector(".mobile-features-drop").style.display = "none";
   
   document.querySelector(".mobile-up1").style.display = "none";
   document.querySelector(".mobile-down1").style.display = "inline";
});


      // mobile company dropdown 

      document.querySelector(".mobile-down2").addEventListener("click", ()=> {
         document.querySelector(".mobile-company-drop").style.display = "grid";
         
         document.querySelector(".mobile-up2").style.display = "inline";
         document.querySelector(".mobile-down2").style.display = "none";
      
      });
      
      document.querySelector(".mobile-up2").addEventListener("click", ()=> {
         document.querySelector(".mobile-company-drop").style.display = "none";
         
         document.querySelector(".mobile-up2").style.display = "none";
         document.querySelector(".mobile-down2").style.display = "inline";
      });