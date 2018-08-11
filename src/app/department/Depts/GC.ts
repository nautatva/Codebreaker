import { Dept,Team,Link } from './dept';
const myteam:Team[]=[
    {name:"Atharv Kotwal"},
    {name:"Atharv"}
]
const mylinks:Link[]=[
    {linkname:"Link 1",linkhref:"#"},
    {linkname:"Link 2",linkhref:"#"},
    {linkname:"Link 3",linkhref:"#"},
]
export const GC:Dept = {
    deptname : "Green Campus",
    team:myteam,
    links:mylinks
}