export interface IPets {
  name: string;
  birthd: string;
  breed: string;
  photo: string;
  _id: string;
  comments: string;
  owner: {
    _id: string;
    name: string;
    email: string;
  };
}

// interface ILang {
//   en?: string;
//   ua?: string;
// }
