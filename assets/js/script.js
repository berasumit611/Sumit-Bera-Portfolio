
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

tech_stack_container.innerHTML=all_tech_element;


//RENDER ALL EDUCATIONAL AND EXPERIENCE DATA
const experience_data=[
    {
        date:"May 2023 - June 2023",
        job_role:"Web Development and Designing intern",
        company:"[Oasis Infobyte] - Remote",
        description:`Developed some mini    responsive web application using HTML, CSS, and JavaScript.
        Gained knowledge of frontend responsive web design.`
    },
    {
        date:"May 2023 - June 2023",
        job_role:"Web Development intern",
        company:"[InternPe] - Remote",
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
  
