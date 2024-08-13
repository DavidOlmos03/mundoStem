
export interface UserBase {
  email: string,
  names: string,
  last_names: string,
  address: string,
  age: number,
}

export interface UserCreate extends UserBase {
  password?: string
}

export interface UserInDBBase extends UserBase{
  id: number;
  created_at: Date;
  updated_at: Date;
}
