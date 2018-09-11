import { GC } from './apiData/Depts/GC';
import { EO } from './apiData/Depts/EO';
import { SSD } from './apiData/Depts/SSD';

export class Event {
  eventName: string;
  // linkhref:string;
  eventImg?: string;
  eventDescription?: string;
}
export class Team {
  name: string;
  mobile?: number;
}
export class Dept {
  deptid?: number;
  deptname: string;
  idname: string;
  heads: Team[];
  team: Team[];
  Events: Event[];
  img?: string;
  description: string;
}

export const depts: Dept[] = [GC, EO, SSD];
