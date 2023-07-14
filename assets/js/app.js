//!+++++++++++++ preloder +++++++++++++
// Delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Show the preloader initially
var preloader = document.querySelector('.preloader');
preloader.style.display = 'flex'; // Display the preloader

// Delay for 5 seconds
delay(500).then(function() {
  // Hide the preloader and display the page content
  preloader.style.display = 'none';
  document.body.style.visibility = 'visible'; // Make the page content visible
});

// Hide the preloader when the page content is loaded
// window.addEventListener('load', function() {
//   var preloader = document.querySelector('.preloader');
//   preloader.style.display = 'none';
// });





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











//!+++++++++++++ sticky header +++++++++++++
// const hero_section=document.getElementById('hero');
// const sticky_observer=new IntersectionObserver((entries)=>{
//   const ent=entries[0];
//   !ent.isIntersecting?document.body.classList.add("sticky"):document.body.classList.remove('sticky');
// },
// {
//   root:null,
//   threshold:0,
// });

// sticky_observer.observe(hero_section);


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

  const header_element = document.querySelector("#header");

mobile_nav_btn.addEventListener("click", () => {
  header_element.classList.toggle("active");
});


// animated no section
function animateNumbers() {
  const elements = document.getElementsByClassName("counter-number");

  for (let i = 0; i < elements.length; i++) {
    const startValue = parseInt(elements[i].textContent);
    const endValue = Math.floor(Math.random() * 100000000); // Set your desired end value here
    const duration = 3000; // Set the animation duration in milliseconds

    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const currentValue = Math.floor(
        startValue + ((endValue - startValue) * progress) / duration
      );

      elements[i].textContent = currentValue.toLocaleString();

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        elements[i].textContent = endValue.toLocaleString();
      }
    }

    window.requestAnimationFrame(step);
  }
}

animateNumbers();

