import { User } from './../interfaces/user.interface';

let users: User[] = [
  {
    id: "user-0",
    firstName: "Test first name",
    lastName: "Test last name",
    dateOfBirth: "01/01/2005",
    identificationNumber: 12345,
    email: "test@123.com",
  }
];

let idCount = users.length;
export default {
  Query: {
    users: () => users,
  },
  User: {
    id: (parent: any) => parent.id,
    firstName: (parent: any) => parent.firstName,
    lastName: (parent: any) => parent.lastName,
    dateOfBirth: (parent: any) => parent.dateOfBirth,
    identificationNumber: (parent: any) => parent.identificationNumber,
    email: (parent: any) => parent.email,
  },
  Mutation: {
    post: (parent: any, args: any) => {
      const user = {
        id: `user-${idCount++}`,
        firstName: args.firstName,
        lastName: args.lastName,
        dateOfBirth: args.dateOfBirth,
        identificationNumber: args.identificationNumber,
        email: args.email,
      };
      users.push(user);
      return user;
    },
    updateUser: (parent: any, args: any) => {
      const index = users.findIndex((x: any) => x.id == args.id);
      users[index] = {
        ...users[index],
        firstName: args.firstName,
        lastName: args.lastName,
        dateOfBirth: args.dateOfBirth,
        identificationNumber: args.identificationNumber,
        email: args.email,
      };
      return users[index];
    },
    deleteUser: (parent: any, args: any) => {
      const index = users.findIndex((x: any) => x.id == args.id);
      users.splice(index, 1);
      return true;
    },
  },
};
