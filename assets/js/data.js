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


// education-experience render

const experience_data=[
    {
        date:"may 2023 - june 2023",
        job_role:"Web Development and Designing intern",
        company:"[Oasis Infobyte] - Remote",
        description:`Developed some mini    responsive web application using HTML, CSS, and JavaScript.
        Gained knowledge of frontend responsive web design.`
    },
    {
        date:"may 2023 - june 2023",
        job_role:"Web Development intern",
        company:"[InternPe] - Remote",
        description:`Gained knowledge of frontend responsive web design.
        Responsible for building some responsive webpages.`
    }
]
const education_data=[
    {
        date:"january 2023 - present",
        institution:"FreeCodeCamp udemy & coursera",
        description:`Take  a bunch of Courses.
        On web development, javascript, php and pogramming languages.Continiously upskilling myself with latest technologies.`
    },
    {
        date:"2020 - present",
        institution:"MCKV Institute of Engineering, Liluah [B.Tech]",
        description:`University - Maulana Abul Kalam Azad
        University of Technology
        <br>currently in 7th semester.
        <br>Stream - Electrical Engineering | CGPA - 8.8/10`
    },
    {
        date:"2019 complited",
        institution:`garalgacha high school, Chanditala 
        <br>
        (Primary and higher secondary education)`,
        description:`Higher secondary exam (WBCHSE board) | Score - 73% | Stream - Science
        <br>
       higher secondary exam (WBBSE board) | Score - 77.85%`
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
                                    <i class="fa-solid fa-bullseye" style="color: #4b65ce;"></i> ${data.description}
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
       
                                <p><i class="fa-solid fa-bullseye" style="color: #4b65ce;"></i>
                                ${data.description}
                                </p>
        
                            </div>`;

        education_list.appendChild(list_item);
    });

}
render_experience_and_education_data();
