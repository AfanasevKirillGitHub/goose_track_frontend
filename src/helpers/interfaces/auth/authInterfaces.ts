export interface ICredentials {
  name?: string;
  phone?: string;
  city?: string;
  password: string;
  email: string;
}

export interface IAuth {
  message: string;
  dataUser: {
    name: string;
    email: string;
    token: string;
    birthday: string;
    phone: string;
    avatarURL: string;
  };
}
