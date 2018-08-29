import { Dept, Team, Imglink } from './dept';
const myteam: Team[] = [{ name: 'Abcd Efgh' }, { name: 'ABCDEFGH ' }];
const mylinks: Imglink[] = [
  {
    linkname: 'Voice For Purpose',
    linkhref: '#',
    linkimg: 'assets/home/cardimg/VFP.png',
    linkdescription: ' Hey There I am Using WhatsApp'
  },
  {
    linkname: 'Link 5',
    linkhref: '#',
    linkimg: 'assets/home/cardimg/VFP.png',
    linkdescription: '  '
  },
  {
    linkname: 'Link 6',
    linkhref: '#',
    linkimg: 'assets/verdade.jpg',
    linkdescription: ' '
  }
];
export const EO: Dept = {
  idname: 'EO',
  deptname: 'Educational Outreach',
  team: myteam,
  imglinks: mylinks,
  description: 'We Teach',
  img: 'assets/ganeshaidol.jpg'
};
