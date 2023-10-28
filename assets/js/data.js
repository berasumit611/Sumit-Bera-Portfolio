const tech_stack_data=[
    {
        name:"C",
        img:`<img width="25" height="25" src="https://img.icons8.com/ios/20/c-italic--v2.png" alt="c-italic--v2"/>`
    },
    {
        name:"C++",
        img:`<img width="25" height="25" src="https://img.icons8.com/ios/50/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>`
    },
    {
        name:"HTML",
        img:`<img width="25" height="25" src="https://img.icons8.com/ios/50/html-5--v2.png" alt="html-5--v2"/>`
    },
    {
        name:"CSS",
        img:`<img width="25" height="25" src="https://img.icons8.com/ios/50/css3.png" alt="css3"/>`
    },
    {
        name:"JavaScript (ES6+)",
        img:`<img width="25" height="25" src="https://img.icons8.com/ios/50/javascript--v1.png" alt="javascript--v1"/>`
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

