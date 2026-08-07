export interface SignUpDto {
  name: string;
  lastName: string;
  age: number;
  sex: string;
  email: string;
  password: string;
}

export interface SignInDto {
  email: string;
  password: string;
}
