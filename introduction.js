const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];

//   const arrLength = webTechs.length;
//   console.log(arrLength, 'arrLength');


//   const firstElement = webTechs[0];
//   console.log(firstElement, 'firstElement');

//   const lastElement = webTechs[webTechs.length-1];
//   console.log(lastElement, 'lastElement');

//   const middleElement = webTechs[(webTechs.indexOf(lastElement) + webTechs.indexOf(firstElement)) / 2];
//   console.log(middleElement, 'middleElement'); 



  const mixedDataTypes = [ 'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
  5,
  55,
  555
];

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies, 'itCompanies');
console.log(itCompanies.length, 'itCompaniesSize');

const firstElement = itCompanies[0];
  console.log(firstElement, 'firstElement');

  const lastElement = itCompanies[itCompanies.length-1];
  console.log(lastElement, 'lastElement');

  const middleElement = itCompanies[(itCompanies.indexOf(lastElement) + itCompanies.indexOf(firstElement)) / 2];
  console.log(middleElement, 'middleElement'); 

  itCompanies.forEach(e => {
      console.log(e.toUpperCase());
  });

  console.log(itCompanies.join(', ') + ' are big IT companies');

  itCompanies.forEach(e => {
      if (e === 'Facebook') {
          console.log(e);
      }
      else{
          console.log('company is not found');
      }
  });