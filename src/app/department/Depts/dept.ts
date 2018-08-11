import {GC} from './GC';
import {EO} from './EO';

export class Link{
    linkname:string;
    linkhref:string;
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
    links:Link[];
    pic?:string;
}

export const depts:Dept[] = [
    GC,
    EO
]