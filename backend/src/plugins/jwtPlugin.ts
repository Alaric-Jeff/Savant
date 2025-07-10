import fp from 'fastify-plugin';
import signToken from '@services/tokenServices/signToken.js';
import verifyToken from '@services/tokenServices/verifyToken.js';
import { FastifyInstance } from 'fastify';

const jwtPlugin = async (fastify: FastifyInstance) => {
  try {
    fastify.decorate('signToken', signToken);
    fastify.decorate('verifyToken', verifyToken);
  } catch (err) {
    throw err instanceof Error ? err : new Error('Unknown error during JWT plugin registration');
  }
};

export default fp(jwtPlugin, { name: 'jwt-plugin' });