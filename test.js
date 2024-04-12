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



//RENDER TECHSTACK 
const tech_stack_data=[
  {
      name:"C",
      img:`<img width="25" height="25" src="https://img.icons8.com/ios/50/c.png" alt="c"/>`
  },
  {
      name:"C++",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>`
  },
  {
      name:"HTML",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/html-5--v2.png" alt="html-5--v2"/>`
  },
  {
      name:"CSS",
      img:`<img width="25" height="25" src="https://img.icons8.com/fluency/48/css3.png" alt="css3"/>`
  },
  {
      name:"JavaScript (ES6+)",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>`
  },
  {
      name:"React",
      img:`<img width="25" height="25" src="https://img.icons8.com/office/20/react.png" alt="react"/>`
  },
  {
      name:"PHP",
      img:`<img width="25" height="25" src="https://img.icons8.com/ios/25/php-logo.png" alt="php"/>`
  },
  {
      name:"Bootstrap",
      img:`<img width="25" height="25" src="https://img.icons8.com/color-glass/20/bootstrap.png" alt="bootstrap"/>`
  },
  {
      name:"Git",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/git.png" alt="git"/>`
  },
  {
      name:"GitHub",
      img:`<img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/20/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"/>`
  },
  {
      name:"PostgreSQL",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql"/>`
  },
  {
      name:"Visual Stdio",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/000000/visual-studio--v1.png" alt="visual-studio--v1"/>`
  },
  {
      name:"Markdown",
      img:`<img width="25" height="25" src="https://img.icons8.com/color/48/markdown.png" alt="markdown"/>`
  }

  
  

]

const tech_stack_container=document.querySelector(".tech-stack-container");

let all_tech_element="";

tech_stack_data.forEach((data)=>{
//   console.log(data);
  all_tech_element+=`<div  class="btn"><span>${data.name}</span>
  ${data.img}
</div>`
});

tech_stack_container.innerHTML=all_tech_element;// When the user clicks on the button, scroll to the top of the document
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
// function removeIntroImg() {
//     const introImgDiv = document.querySelector('.intro-img');
//     if (introImgDiv) {
//       introImgDiv.remove();
//     }
//   }
  
// function handleWindowResize() {
//     const screenWidth = window.innerWidth;
//     if (screenWidth < 576) {
//       removeIntroImg();
//     }
//     else return;
//   }
  
  // Execute on initial load
  handleWindowResize();
  
  // Execute on window resize
  window.addEventListener('resize', handleWindowResize);
  
 /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            RESPONSIVE NAVBAR BOTTON FUNCTIONALITY
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--*/

  const mobile_nav_btn = document.querySelector(".mobile-navbar-btn");
  const navbar=document.querySelector('.navbar')
  

mobile_nav_btn.addEventListener("click", () => {
  console.alart("hi");
  navbar.style.visibility=visible;
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

///-----------------
function mouseOver(){
  document.getElementsByClassName('skills').classList.add('flip-horizontal-bottom');
}
function mouseOut(){
  document.getElementsByClassName('skills').classList.remove('flip-horizontal-bottom');
}

// ------------bio data stats rendering
