// creating aportfolio tabbed component
const parent_container_btns = document.querySelector(".parent-container-btns");

const p_btn = document.querySelectorAll(".p-btn");

const p_img_elem = document.querySelectorAll(".img-overlay");

parent_container_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((currElem) =>
    currElem.classList.remove("portfolio-image-not-active")
  );

  p_btn_clicked.classList.add("portfolio-image-not-active");

  //get btn no using dataset
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  //get img
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((currElem) =>
    currElem.classList.add("portfolio-image-not-active")
  );

  img_active.forEach((currElem) =>
    currElem.classList.remove("portfolio-image-not-active")
  );
});

// !-- Initialize Swiper -->

  
    var swiper = new Swiper(".mySwiper", {
      speed: 600,
      parallax: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
    });

// !scroll to top button functionality----------

const scroll_to_top_element = document.createElement("div");

scroll_to_top_element.classList.add("scroll_to_top_style");

scroll_to_top_element.innerHTML = `<ion-icon name="arrow-up-circle-outline" class="scroll_to_top_icon"></ion-icon>`;
// *-------
const footer_element = document.querySelector(".section-footer");

//? The after() method inserts specified content after the selected elements.

footer_element.after(scroll_to_top_element);

// --------------------------------------------------
const hero_section = document.querySelector(".section-hero");

//? The scrollIntoView() method scrolls an element into the visible area of the browser window.

const scrollTop = () => {
  hero_section.scrollIntoView({ behavior: "smooth" });
};
//when click functionality
scroll_to_top_element.addEventListener("click", scrollTop);
// !----------------------------end---------------------------------

// !-----------------anumated no functionality start-----------------------------------------------
const work_section = document.querySelector(".section-work-data");
const counter_number = document.querySelectorAll(".counter-numbers");

const work_observer = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    if (entry.isIntersecting == false) {
      return;
    }
   
    

    const speed = 5;

    counter_number.forEach((currElem) => {
      const update_Number = () => {
        const target_number = parseInt(currElem.dataset.number);
        // console.log(target_number);//2000

        const initial_number = parseInt(currElem.innerText);
        // console.log(initial_number);//0

        const increment_number = Math.trunc(target_number / speed); //?get increment value and Math.trunc() static method returns the integer part of a number by removing any fractional digits

        // console.log(increment_number);

        //! loop for view
        if (initial_number < target_number) {
          currElem.innerText = `${initial_number + increment_number}+`;
        }

        //! set tiome out for run running update no function upto target value
        setTimeout(update_Number, 500);
      };
      update_Number();
    });
    work_observer.unobserve(work_section);
  },
  {
    root: null,
    threshold: 0,
  }
);

work_observer.observe(work_section);

// !-----------------anumated no functionality end-----------------------------------------------

//? =============================================================responsive navbar=================

const mobile_nav_btn = document.querySelector(".mobile-navbar-btn");

const header_element = document.querySelector(".header");

mobile_nav_btn.addEventListener("click", () => {
  header_element.classList.toggle("active");
});
// ?-------------------end---------------------------

//? =============================================================sticky navbar=================
//* we can achive this functionality by---- The getBoundingClientRect() method returns the size of an element and its position relative to the viewport. The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.

const sticky_observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky-navbar")
      : document.body.classList.remove("sticky-navbar");
  },
  {
    root: null,
    threshold: 0,
  }
);

sticky_observer.observe(hero_section);

//? -----------------------end-------------------------

//!--------- lazy loding image----------------------
  const imgRef=document.querySelector('img[data-src]');

  const img_observer=new IntersectionObserver((entries)=>{

    const [entry]=entries;
    // console.log(entry);
    if(!entry.isIntersecting) return;
    entry.target.src=imgRef.dataset.src;
  },{
    root:null,
    threshold:0,
  });
  img_observer.observe(imgRef)

//!==================================================