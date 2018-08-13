import { Dept,Team,Img } from './dept';
const myteam:Team[]=[
    {name:"Atharv Kotwal"},
    {name:"Atharv"}
]
const myimages:Img[]=[
    {img:"../../assets/VFP/VFP.png",imghref:"#"},
    {img:"https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=w2247-h1264",imghref:"https://www.google.co.in/"},
    {img:"img 3",imghref:"#"},
]
export const GC:Dept = {
    deptname : "Green Campus",
    team:myteam,
    images:myimages
}