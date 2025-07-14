import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

const corsPlugin = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
    strictPreflight: true,
    hideOptionsRoute: true
  });
};

export default fp(corsPlugin, { name: 'cors-plugin' });