export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN || '8h',
  resetPasswordExpiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN || '1h',
};
