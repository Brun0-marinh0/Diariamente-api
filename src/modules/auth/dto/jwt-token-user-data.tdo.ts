class JWTTokenUserData {
  access_token: string;
  user: UserSignInDto;
}

class UserSignInDto {
  id: number;
  name: string;
  email: string;
}

export { JWTTokenUserData, UserSignInDto };
