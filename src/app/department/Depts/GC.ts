import { Dept,Team,Imglink } from './dept';
const myteam:Team[]=[
    {name:"Atharv Kotwal"},
    {name:"Atharv"}
]
const mylinks:Imglink[]=[
    {linkname:"Ganesh Idol",linkhref:"#",linkimg:"assets/ganeshaidol.jpg"},
    {linkname:"Google",linkhref:"https://www.google.co.in/",linkimg:"assets/verdade.jpg"},
    {linkname:"Voice For Purpose",linkhref:"#",linkimg:"assets/VFP/VFP.png"},
]
export const GC:Dept = {
    deptname : "Green Campus",
    team:myteam,
    imglinks:mylinks,
    description:"We plant",
    img:"assets/VFP/VFP.png"
}