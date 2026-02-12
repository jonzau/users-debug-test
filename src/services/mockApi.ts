export const generateRandomUserFakeApiResponse = () => {
  const nameData = generateRandomName();
  const thumbnailId = Math.floor(Math.random() * 99) + 1;
  
  const user = {
    name: {
      first: nameData.firstName,
      last: nameData.lastName
    },
    email: nameData.firstName[0].toLowerCase() + '.' + nameData.lastName.toLowerCase() + '@fakeemail.com',
    picture: {
      thumbnail: `https://randomuser.me/api/portraits/${nameData.gender}/${thumbnailId}.jpg`
    }
  };
  return {
    json: () => Promise.resolve({results: [user]})
  };
};

const generateRandomName = () => {
  const maleNames = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kevin', 'Brian', 'George', 'Edward', 'Ronald', 'Timothy'];
  const femaleNames = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Dorothy'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  
  const gender = Math.random() > 0.5 ? 'men' : 'women';
  const firstNames = gender === 'men' ? maleNames : femaleNames;
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  return {
    firstName,
    lastName,
    gender
  };
};
