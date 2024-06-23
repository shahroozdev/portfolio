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
