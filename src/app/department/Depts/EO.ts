import { Dept,Team,Imglink } from './dept';
const myteam:Team[]=[
    {name:"Abcd Efgh"},
    {name:"ABCDEFGH "}
]
const mylinks:Imglink[]=[
    {linkname:"YouTube",linkhref:"https://www.youtube.com/",linkimg:"assets/ganeshaidol.jpg"},
    {linkname:"Link 5",linkhref:"#",linkimg:"assets/VFP/VFP.png"},
    {linkname:"Link 6",linkhref:"#",linkimg:"assets/verdade.jpg"},
]
export const EO:Dept = {
    deptname : "Educational Outreach",
    team:myteam,
    imglinks:mylinks,
    description:"We Teach",
    img:"assets/ganeshaidol.jpg"
}