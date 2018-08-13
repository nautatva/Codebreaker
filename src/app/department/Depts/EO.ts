import { Dept,Team, Img } from './dept';
const myteam:Team[]=[
    {name:"Abcd Efgh"},
    {name:"ABCDEFGH "}
]
const myimages:Img[]=[
    {img:"https://s20352.pcdn.co/wp-content/uploads/2018/03/2000px-YouTube_social_white_square_2017.svg_-1-1024x778.png",imghref:"https://www.youtube.com/"},
    {img:"../../assets/VFP/VFP.png",imghref:"#"},
    {img:"img 6",imghref:"#"},
]
export const EO:Dept = {
    deptname : "Educational Outreach",
    team:myteam,
    images:myimages
}