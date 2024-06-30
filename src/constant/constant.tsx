import Icon from '@/components/icons/Icon'
import { Navbartype } from '@/types/types'
export const navData:Navbartype[]=[
    {name:'Home',path:'/',icon:<Icon name='HomeIcon'/>},
    {name:'About',path:'/about',icon:<Icon name='userIcon'/>},
    {name:'Services',path:'/services',icon:<Icon name='servicesIcon'/>},
    {name:'Work',path:'/work',icon:<Icon name='workicon'/>},
    {name:'Testimonials',path:'/testimonials',icon:<Icon name='testimonials'/>},
    {name:'Contact',path:'/contact',icon:<Icon name='contactIcon'/>}
]

export const aboutSectionList=[
{title:"Skills", subTitle:[{subT:"Web Developer (Front End)",icon:["htmlIcon","cssIcon","jsIcon","reactIcon","nextJsIcon","vueJsIcon","tanstackQueryIcon","reduxIcon"]},{subT:"Web Developer (Back End)",icon:["nodeJsIcon","expressJsIcon","nestJs","postgreSqlIcon","mongoDBIcon","prismaIcon"]}]}, 
// {title:"Certificates",subTitle:"Web Developer Diploma", stage:"2011"}, 
{title:"Experience", subTitle:[{subT:"Web Developer",insti:" Freelancer",stage:"2012-2022"},{subT:"Web Developer",insti:" Crexed",stage:"2022-2023"},{subT:"Front End Team Leader",insti:" Crexed",stage:"2023-2024"}]},
 {title:"Credentials", subTitle:[{subT:"Web Developer Diploma",insti:"Islamia University BWP",stage:'2012'},{subT:"Google IT Automation with Python",insti:"Google",stage:'2023'},{subT:"BS Computer Science",insti:"Virtual University Pakistan",stage:'2024'}]}
]

export const services=[
      {
        "name": "Frontend Development",
        "description": "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React, Vue, or Angular.",
        "icon": "🌐"
      },
      {
        "name": "Backend Development",
        "description": "Creating robust server-side applications and APIs using Node.js, Express, Django, Ruby on Rails, or other backend technologies.",
        "icon": "🖥️"
      },
      {
        "name": "Full Stack Development",
        "description": "Combining frontend and backend development skills to build complete web applications from scratch.",
        "icon": "🔄"
      },
      {
        "name": "UI/UX Design",
        "description": "Designing intuitive and visually appealing user interfaces and experiences using tools like Figma, Sketch, or Adobe XD.",
        "icon": "🎨"
      },
      {
        "name": "E-commerce Development",
        "description": "Developing online stores with features like product listings, shopping carts, payment gateways, and order management.",
        "icon": "🛒"
      },
      {
        "name": "Content Management Systems",
        "description": "Implementing and customizing CMS platforms like WordPress, Joomla, or Drupal for easy content management.",
        "icon": "📋"
      },
      {
        "name": "Search Engine Optimization (SEO)",
        "description": "Optimizing websites for better search engine rankings and increased organic traffic.",
        "icon": "🔍"
      },
      {
        "name": "Web Hosting and Maintenance",
        "description": "Providing web hosting solutions and ongoing maintenance to ensure websites are secure, fast, and up-to-date.",
        "icon": "🛠️"
      },
      {
        "name": "Web Performance Optimization",
        "description": "Enhancing website speed and performance through techniques like image optimization, code minification, and caching.",
        "icon": "⚡"
      },
      {
        "name": "API Development and Integration",
        "description": "Creating and integrating APIs to enable seamless data exchange between different systems and services.",
        "icon": "🔗"
      },
      {
        "name": "Bug Fixing",
        "description": "Identifying, diagnosing, and resolving bugs and issues in web applications to ensure smooth functionality.",
        "icon": "🔧"
      },
      {
        "name": "WordPress Development",
        "description": "Developing and customizing websites using WordPress to meet various business needs.",
        "icon": "🌍"
      },
      {
        "name": "All Types of Websites",
        "description": "Creating websites for blogs, portfolios, business sites, landing pages, and more.",
        "icon": "🌎"
      }
    ]

  