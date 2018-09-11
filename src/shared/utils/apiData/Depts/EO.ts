import { Dept, Team, Event } from '../../dept';
const departmentName: string = 'Educational Outreach';
const departmentDescription: string = 'We teach -- description here';
const mainImage: string = 'assets/home/cardimg/VFP.png';
const head: Team[] = [{ name: 'Aditya Saurabh' }, { name: 'Yash Kadam' }];
const myteam: Team[] = [{ name: 'Name goes here' }, { name: '2nd name' }];
const events: Event[] = [
  {
    eventName: 'Ganesh Idol',
    eventImg: 'assets/gallery/verdade.jpg'
  },
  {
    eventName: 'Transplantation',
    eventImg: 'assets/gallery/plant.jpg',
    eventDescription:
      'We identify the areas which lack green cover inside institute and transplant the tree saplings over there. We have had plantations in the area around hostel-15 recently, which was severely lacking green cover due to multiple construction activities.'
  },
  {
    eventName: 'Collection of Saplings',
    eventImg: 'assets/gallery/plant.jpg',
    eventDescription:
      'We collect naturally grown saplings in the institute and grow them in our Nursery in plastic covers till they are self dependant to grow in land.'
  }
];

export const EO: Dept = {
  idname: 'EO',
  deptname: departmentName,
  heads: head,
  team: myteam,
  Events: events,
  description: departmentDescription,
  img: mainImage
};
