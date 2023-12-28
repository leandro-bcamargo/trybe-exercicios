type User = {
  id: number,
  name: string,
  address: string,
  addressNumber: number,
};

const UserDB = {
  findById: (userId: number) => ({
    id: userId,
    name: 'Silvana',
  }),
};

function getUser(userId: number): User {
  const user = UserDB.findById(userId);
  const userWithAddress: User = { 
    ...user, 
    address: 'Rua São Camilo',
    addressNumber: 111,
  }
  
  return userWithAddress;
}

const user = getUser(1);
console.log(user);
console.log(user.addressNumber);