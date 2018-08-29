import { Dept, Team, Imglink } from './dept';
const myteam: Team[] = [{ name: 'Atharv Kotwal' }, { name: 'Atharv' }];
const mylinks: Imglink[] = [
  { linkname: 'Ganesh Idol', linkhref: '#', linkimg: 'assets/ganeshaidol.jpg' },
  {
    linkname: 'Transplantation',
    linkhref: 'https://www.google.co.in/',
    linkimg: 'assets/verdade.jpg',
    linkdescription:
      'We identify the areas which lack green cover inside institute and transplant the tree saplings over there. We have had plantations in the area around hostel-15 recently, which was severely lacking green cover due to multiple construction activities.'
  },
  {
    linkname: 'Collection of Saplings',
    linkhref: 'https://www.youtube.com/',
    linkimg: 'assets/ganeshaidol.jpg',
    linkdescription:
      'We collect naturally grown saplings in the institute and grow them in our Nursery in plastic covers till they are self dependant to grow in land.'
  }
];
export const SSD: Dept = {
  idname: 'SSD',
  deptname: 'Sustainable Social Development',
  team: myteam,
  imglinks: mylinks,
  description: 'We plant',
  img: 'assets/home/cardimg/VFP.png'
};
