import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function signToken(id: number): string {
  try {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) throw new Error('ACCESS_TOKEN_SECRET is missing');

    const payload = { id };
    const options: SignOptions = {
      expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRES_IN) ?? '15m',
      algorithm: 'HS256',
    };

    return jwt.sign(payload, secret, options);
  } catch (err) {
    console.error('Token signing failed:', err);
    throw new Error('Failed to sign token');
  }
}

export default signToken;

