import {GC} from './GC';
import {EO} from './EO';

export class Imglink{
    linkname:string;
    linkhref:string;
    linkimg?:string;
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
    imglinks:Imglink[];
    img?:string;
    description;
}

export const depts:Dept[] = [
    GC,
    EO
]