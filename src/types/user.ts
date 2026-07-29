export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  company: {
    name: string;
  };
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
