import { Dept,Team,Imglink } from './dept';
const myteam:Team[]=[
    {name:"Atharv Kotwal"},
    {name:"Atharv"}
]
const mylinks:Imglink[]=[
    {linkname:"Link 1",linkhref:"#",linkimg:"../../assets/ganeshaidol.jpg"},
    {linkname:"google",linkhref:"https://www.google.co.in/",linkimg:"../../assets/verdade.jpg"},
    {linkname:"Link 3",linkhref:"#",linkimg:"../../assets/VFP/VFP.png"},
]
export const GC:Dept = {
    deptname : "Green Campus",
    team:myteam,
    imglinks:mylinks,
    description:"We plant",
    img:"../../../assets/VFP/VFP.png"
}