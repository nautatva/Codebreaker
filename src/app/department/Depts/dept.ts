import {GC} from './GC';
import {EO} from './EO';

export class Img{
    img:string;
    imghref:string;
}
export class Team{
    name:string;
    mobile?:number;
    details?:string;
}
export class Dept{
    deptid?:number;
    deptname:string;
    team:Team[];
    images:Img[];
    pic?:string;
}

export const depts:Dept[] = [
    GC,
    EO
]