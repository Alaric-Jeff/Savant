import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function signToken(id: number): string {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) throw new Error('ACCESS_TOKEN_SECRET is missing');

  return (jwt.sign as any)(
    { id },
    secret,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m',
      algorithm: 'HS256',
    }
  );
}

export default signToken;
