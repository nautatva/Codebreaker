import { Dept,Team,Link } from './dept';
const myteam:Team[]=[
    {name:"Abcd Efgh"},
    {name:"ABCDEFGH "}
]
const mylinks:Link[]=[
    {linkname:"YouTube",linkhref:"https://www.youtube.com/"},
    {linkname:"Link 5",linkhref:"#"},
    {linkname:"Link 6",linkhref:"#"},
]
export const EO:Dept = {
    deptname : "Educational Outreach",
    team:myteam,
    links:mylinks
}