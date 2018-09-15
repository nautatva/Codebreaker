import { Dept, Team, Event } from '../../dept';
const departmentName: string = 'Educational Outreach';
const departmentDescription: string =
  "Education is our birthright, but not all have the privilege. We teach the underprivileged and also let them inculcate cultural skills and sound morals. You get to interact with children and relive your childhood. You leave a positive impact on someone's life and be their role model";
const mainImage: string = 'assets/home/cardimg/VFP.png';
const head: Team[] = [
  { name: 'Aditya Saurabh', mobile: '9987097028' },
  { name: 'Yash Kadam', mobile: '8976136868' }
];
const myteam: Team[] = [
  { name: 'Aniket Kale', mobile: '9881032043' },
  { name: 'Denil Mehta', mobile: '9586801119' },
  { name: 'Nihal Ratan', mobile: '8279450546' },
  { name: 'Niket Parikh', mobile: '9182980055' },
  { name: 'Nilaja Nitin Bende', mobile: '8530035436' },
  { name: 'Rachana Meena', mobile: '7400400987' },
  { name: 'Ritesh Chandramani', mobile: '8169609631' },
  { name: 'Saptarshi Ratna', mobile: '9975196749' },
  { name: 'Vaibhav Chandan', mobile: '9518971041' }
];
const events: Event[] = [
  {
    eventName: 'NGO Volunteering',
    // eventImg: 'assets/gallery/verdade.jpg',
    eventDescription:
      'Volunteers teach a class of students at an NGO centre located near the campus'
  },
  {
    eventName: 'Adult Literacy Programme',
    eventImg: 'assets/EO/ALP.jpg',
    eventDescription:
      'Following up on the ideology that education has no age bar, institute staff are given basic education'
  },
  {
    eventName: 'Open Learning Initiative (OLI)',
    eventImg: '',
    eventDescription:
      'Educational videos are recorded in regional languages (because language should not be a barrier) and are available online to reach out to remote areas'
  },
  {
    eventName: 'Voice For Purpose',
    eventImg: '',
    eventDescription:
      'Audio Books of famous literature and travelogues of different cities in India are recorded and are available online to share the gift of Vision with those who are not so fortunate'
  },
  {
    eventName: 'Neem School',
    eventImg: '',
    eventDescription:
      'Education is not limited to books. As a man is known for his morals, (optional:- in association with Black Swan Consulting Group’s Neem School programme,) we volunteer to inculcate moral values in the kids (optional:- living in the slum near the campus)'
  },
  {
    eventName: 'Muskaan',
    eventImg: '',
    eventDescription:
      'Since classroom education is not enough, students are involved in extracurricular activities, for their all-round development'
  },
  {
    eventName: 'Prayog',
    eventImg: '',
    eventDescription:
      'Experiences teach us a lot, so science experiments are performed by the students to help them develop a scientific temperament and provide hands-on experience'
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
