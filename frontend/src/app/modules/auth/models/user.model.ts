export interface ISessionData {
  token: string;
  user: {
    id: string;
    nombres: string;
    apellidos: string;
    email: string;
    role: string;
  };
}

export interface IRegisterData {
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  repeatPassword: string;
}
