import 'fastify';
import { PrismaClient } from '@prisma/client';
import signToken from '@services/tokenServices/signToken.ts';
import verifyToken from '@services/tokenServices/verifyToken.ts';
import { JwtPayload } from 'jsonwebtoken';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
    signToken: (id: number) => string;
    verifyToken: (token: string) => JwtPayload | string;
  }
}
