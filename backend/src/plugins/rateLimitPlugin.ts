import { FastifyInstance } from "fastify";
import ratelimiter from '@fastify/rate-limit'
import fp from 'fastify-plugin'

// !this is still a basic integration, imma update this when I get home

const rateLimiterPlugin = async (fastify: FastifyInstance) => {
    await fastify.register(ratelimiter, {
        timeWindow: '1 minute',
        max: 100
    })
};

export default fp(rateLimiterPlugin);