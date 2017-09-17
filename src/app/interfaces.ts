export interface IUser {
  id: number;
  name: string;
  email: string;
  company: ICompany;
}

export interface ICompany {
  name: string;
}

export interface IPost {
  title: string;
  body: string;
}

export interface IComment {

}
