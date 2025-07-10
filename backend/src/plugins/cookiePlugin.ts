import fp from 'fastify-plugin';
import cookie from '@fastify/cookie';
import { FastifyInstance } from 'fastify';

const cookiePlugin = async (fastify: FastifyInstance) => {
  try {
    await fastify.register(cookie, {
      secret: process.env.COOKIE_SECRET!, 
      parseOptions: {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 3600,
      },
    });
  } catch (err) {
    throw err instanceof Error ? err : new Error('Unknown error during cookie plugin registration');
  }
};

export default fp(cookiePlugin, { name: 'cookie-plugin' });