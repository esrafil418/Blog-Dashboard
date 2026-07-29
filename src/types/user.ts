export type User = {
  id: number;

  firstName: string;
  lastName: string;
  maidenName: string;

  age: number;
  gender: string;

  email: string;
  phone: string;

  username: string;

  image: string;

  company: {
    name: string;
    title: string;
  };

  address: {
    city: string;
    state: string;
    country: string;
  };
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
