//!+++++++++++++ scroll to top functionality +++++++++++++


const scroll_to_top_element = document.createElement("div");

scroll_to_top_element.classList.add("scroll_to_top_style");

scroll_to_top_element.innerHTML = `<ion-icon name="arrow-up-circle-outline" class="scroll_to_top_icon"></ion-icon>`;

const footer_element = document.getElementById('footer');

//? The after() method inserts specified content after the selected elements.

footer_element.after(scroll_to_top_element);

window.onscroll=function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop>1000|| document.documentElement.scrollTop>1000){
    scroll_to_top_element.style.display="block";
  }
  else{
    scroll_to_top_element.style.display="none";
  }
}



// When the user clicks on the button, scroll to the top of the document
scroll_to_top_element.addEventListener("click",()=>{
  document.nodeType.scrollTop=0;
  document.documentElement.scrollTop=0;
});

//!+++++++++++++ animated work section functionality +++++++++++++












/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                           header section responcive
                           remove img div
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function removeIntroImg() {
    const introImgDiv = document.querySelector('.intro-img');
    if (introImgDiv) {
      introImgDiv.remove();
    }
  }
  
function handleWindowResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 576) {
      removeIntroImg();
    }
    else return;
  }
  
  // Execute on initial load
  handleWindowResize();
  
  // Execute on window resize
  window.addEventListener('resize', handleWindowResize);
  
 /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            RESPONSIVE NAVBAR BOTTON FUNCTIONALITY
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--*/

  const mobile_nav_btn = document.querySelector(".mobile-navbar-btn");

  const header_element = document.querySelector(".header");

mobile_nav_btn.addEventListener("click", () => {
  header_element.classList.toggle("active");
});

