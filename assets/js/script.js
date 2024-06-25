


//1> render skills
// Fetch the skills.json file
fetch('assets/js/skills.json')
  .then(response => response.json())
  .then(data => {
    // Get reference to each div element
    const frontendDiv = document.querySelector('.frontend_skills');
    const backendDiv = document.querySelector('.backend_skills');
    const databaseDiv = document.querySelector('.database_skills');
    const othersDiv = document.querySelector('.others_skills');
    
    // Render frontend skills
    let all_frontend_element="";
    data.frontend.forEach(skill => {
        all_frontend_element+=
      `<div class="common_design">

        <span>${skill.language}</span>
        <img width="25" height="25" src="${skill.image}" alt="${skill.language}"/>
      
      </div>`;
    });
    frontendDiv.innerHTML=all_frontend_element;

    
    // Render backend skills
    let all_backend_element="";
    data.backend.forEach(skill => {
        all_backend_element+=
            `<div class="common_design">
                <span>${skill.language}</span>
                <img width="25" height="25" src="${skill.image}" alt="${skill.language}"/>
            </div>`;
    });
    backendDiv.innerHTML=all_backend_element;

    
    // Render database skills
    let all_db_element="";
    data.database.forEach(skill => {
        all_db_element+=
        `<div class="common_design">
                <span>${skill.language}</span>
                <img width="25" height="25" src="${skill.image}" alt="${skill.language}"/>
        </div>`;
    });
    databaseDiv.innerHTML=all_db_element;
    
    // Render other skills
    let all_others_element="";
    data.others.forEach(skill => {
        all_others_element+=
        `<div class="common_design">
            <span>${skill.language}</span>
            <img width="25" height="25" src="${skill.image}" alt="${skill.language}"/>
        </div>`;
    });
    othersDiv.innerHTML=all_others_element;

  })
  .catch(error => console.error('Error fetching skills.json:', error));

//2> render social__links
const social__links_obj=[
  
  {
    name:"GitHub",
    img:"https://img.icons8.com/ios-glyphs/60/github.png",
    link:"https://github.com/berasumit611"
  },
  {
    name:"HackerRank",
    img:"https://img.icons8.com/windows/32/hackerrank.png",
    link:"https://www.hackerrank.com/profile/berasumit611"
  },
  {
    name:"Linkedin",
    img:"https://img.icons8.com/ios-glyphs/60/linkedin.png",
    link:"https://www.linkedin.com/in/berasumit611/"
  }

]
const social__links_ul=document.querySelector('.social__links');//select social__links ul element
let all_social__links="";
social__links_obj.forEach((data)=>{
  all_social__links+=
  `<a href="${data.link}" target="_blank">
      <div class="common_design" title="${data.name}">
        <span>${data.name}</span>
        <img width="25" height="25" src="${data.img}" alt="${data.name}"/>
      </div>
    </a>`
});
social__links_ul.innerHTML=all_social__links;









// ----------------------------------------
//RENDER ALL EDUCATIONAL AND EXPERIENCE DATA
const experience_data=[
    {
        date:"May 2023 - June 2023",
        job_role:"Web Development and Designing intern",
        company:"X - Remote",
        description:`Developed some mini    responsive web application using HTML, CSS, and JavaScript.
        Gained knowledge of frontend responsive web design.`
    },
    {
        date:"May 2023 - June 2023",
        job_role:"Web Development intern",
        company:"Y - Remote",
        description:`Gained knowledge of frontend responsive web design.
        Responsible for building some responsive webpages.`
    }
]
const education_data=[
    {
        date:"January 2023 - Present",
        institution:"Self learning",
        description:`Take  a bunch of Courses.
        On web development, javascript, php and pogramming languages.Continiously upskilling myself with latest technologies.`
    },
    {
        date:"2020 - Present",
        institution:"MCKV Institute of Engineering, Liluah [B.Tech]",
        description:`University - Maulana Abul Kalam Azad
        University of Technology
        <br>currently in 8th semester.
        <br>Stream - Electrical Engineering | CGPA - 8.67/10`
    },
    {
        date:"2019 Complited",
        institution:`Garalgacha high school, Chanditala 
        <br>
        (Primary and higher secondary education)`,
        description:`Higher secondary exam (WBCHSE board) | Score - 73% | Stream - Science
        <br>
       Higher secondary exam (WBBSE board) | Score - 77.85%`
    }
]

function render_experience_and_education_data(){

    //select ul element
    const experience_list=document.getElementById('experience-list');
    
    experience_data.forEach(data=>{
        
        //for each data create list item
        const list_item=document.createElement('li');
        list_item.innerHTML=`<div class="timeline-content">
                                <h4 class="date">${data.date}</h4>
        
                                <h3>${data.job_role}<br>
                                    ${data.company}</h3>
        
                                <p>
                                <img width="15" height="15" src="https://img.icons8.com/pastel-glyph/20/define-location--v2.png" alt="define-location--v2"/> ${data.description}
                                </p>
                            </div>`;

        
        //append each list item to ul
        experience_list.appendChild(list_item);
        
    });

    const education_list=document.getElementById('education-list');

    education_data.forEach(data=>{
        const list_item=document.createElement('li');
        list_item.innerHTML=`<div class="timeline-content">
                                <h4 class="date">${data.date}</h4>
        
                                <h3>${data.institution}</h3>
       
                                <p> <img width="15" height="15" src="https://img.icons8.com/pastel-glyph/20/define-location--v2.png" alt="define-location--v2"/> 
                                ${data.description}
                                </p>
        
                            </div>`;

        education_list.appendChild(list_item);
    });

}
render_experience_and_education_data();


//RENDER WORK DATA

const workData = [
    { number: 1000, label: "Hours of Code" },
    { number: 10, label: "Self Projects" },
    { number: 2, label: "Internships" }
  ];
  
  // Get the container element
  const workDataContainer = document.getElementById("work-data");
  
  // Create and append elements dynamically
  workData.forEach(item => {
    const div = document.createElement("div");
  
    
    
    const counterNumbers = document.createElement("p");

    counterNumbers.classList.add("counter-numbers");
    counterNumbers.textContent = 0; // Set the initial value to 0
  
    const label = document.createElement("p");
    label.classList.add("counter-label")
    label.textContent = item.label;
  
    div.appendChild(counterNumbers);
    div.appendChild(label);
  
    workDataContainer.appendChild(div);
  
    // Set up the Intersection Observer
    const observerObj = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        //entry is aobject 
        //isIntersecting is aentry obj property which is true
        if (entry.isIntersecting) {
          // Start counting animation when the section is in view
        //   console.log(entry);
          animateCounter(counterNumbers, item.number);
        //   target is aproperty of entry which is div
          observer.unobserve(entry.target);
        }
      });
    });
  
    // Observe each dynamically created div
    observerObj.observe(div);
  });
  
  // Function to animate the counter
  function animateCounter(element, targetValue) {
    let currentValue = 0;
  
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue += Math.ceil(targetValue / 20);
        element.textContent = currentValue;
      } else {
        element.textContent = targetValue;
        clearInterval(interval);
      }
    }, 100);
  }

  //scroll to top
  const scrollDiv = document.getElementById("scroll-to-top");
scrollDiv.addEventListener("click", function() {
    // Scroll to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});

// hambarger menu
document.addEventListener('DOMContentLoaded', function() {
const bar_icon=document.getElementById('bar');
const close_icon=document.getElementById('close');
const navbar = document.querySelector('.navbar');

bar_icon.addEventListener('click',()=>{
  navbar.classList.add('active');
});
close_icon.addEventListener('click',()=>{
  console.log("hi");

  navbar.classList.remove('active');
});

});


