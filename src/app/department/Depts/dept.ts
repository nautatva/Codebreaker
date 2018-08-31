import { GC } from './GC';
import { EO } from './EO';
import { SSD } from './SSD';

export class Imglink {
  eventName: string;
  // linkhref:string;
  eventImg?: string;
  eventDescription?: string;
}
export class Team {
  name: string;
  mobile?: number;
  details?: string;
}
export class Dept {
  deptid?: number;
  deptname: string;
  idname: string;
  heads: Team[];
  team: Team[];
  imglinks: Imglink[];
  img?: string;
  description: string;
}

export const depts: Dept[] = [GC, EO, SSD];
