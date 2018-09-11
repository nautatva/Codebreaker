import { Dept, Team, Event } from '../../dept';
const departmentName: string = 'Green Campus';
const departmentDescription: string = 'We plant -- description here';
const mainImage: string = 'assets/home/cardimg/biomapping.jpg';
const head: Team[] = [{ name: 'Hiranyabagh Nirale' }, { name: 'Tanay Wagh' }];
const myteam: Team[] = [{ name: 'Name goes here' }, { name: '2nd name' }];
const events: Event[] = [
  {
    eventName: 'Transplantation',
    eventImg: 'assets/gallery/plant.jpg'
  },
  {
    eventName: 'Ganesh Idol',
    eventImg: 'assets/gallery/woodimage.jpg',
    eventDescription:
      'We identify the areas which lack green cover inside institute and transplant the tree saplings over there. We have had plantations in the area around hostel-15 recently, which was severely lacking green cover due to multiple construction activities.'
  },
  {
    eventName: 'Collection of Saplings',
    eventImg: 'assets/gallery/verdade.jpg',
    eventDescription:
      'We collect naturally grown saplings in the institute and grow them in our Nursery in plastic covers till they are self dependant to grow in land.'
  }
];

export const GC: Dept = {
  idname: 'GC',
  deptname: departmentName,
  heads: head,
  team: myteam,
  Events: events,
  description: departmentDescription,
  img: mainImage
};
