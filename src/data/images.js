const DAY = 1000 * 60 * 60 * 24;
// Dette er arrayet du skal liste ut
// Det inneholder bilder på formatet
// { id: 1, urL: 'http://url.com', description: 'alt-tekst' }
const images = [
  {
    id: '1',
    url:
      'https://images.unsplash.com/photo-1556564582-374df0d7577c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'En person som sparker',
    createdDate: new Date() - DAY * 2,
    username: '@olav',
  },
  {
    id: '2',
    url:
      'https://images.unsplash.com/photo-1556575157-15758d4d0d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description:
      'Tre steinmunker som holder seg for henholdsvis ører, munn og øyne',
    createdDate: new Date() - DAY * 3,
    username: '@lillesand',
  },
  {
    id: '3',
    url:
      'https://images.unsplash.com/photo-1556595015-dda91ab57740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'En foss i Yosemite nasjonalpark i USA',
    createdDate: new Date() - DAY * 4,
    username: '@bendik_iversen',
  },
  {
    id: '4',
    url:
      'https://images.unsplash.com/photo-1556609516-87806077156a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'To asiatiske ungdommer som står på en stor saltslette',
    createdDate: new Date() - DAY * 12,
    username: '@selbekk',
  },
  {
    id: '5',
    url:
      'https://images.unsplash.com/photo-1556560024-b4e093c161a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'Bagasjerommet til en klassisk Volvo',
    createdDate: new Date() - DAY * 50,
    username: '@marie',
  },
];

export default images;
