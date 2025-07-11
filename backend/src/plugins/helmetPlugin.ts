import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import helmet from '@fastify/helmet'

const helmetPlugin = async (fastify: FastifyInstance) => {
    try{
        fastify.register(helmet, {
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["`self`"],
                    imgSrc: ["`self`", "`http`"],
                    scriptSrc: ["`self`", "`unsafe-inline`"]
                }
            },
            hidePoweredBy: true,
            hsts: {
                maxAge: 31536000
            },
            frameguard: {action: 'deny'}
        })
    }catch(err: unknown){
        throw err instanceof Error ? err : new Error('Unknown error during helmet plugin registration');
    }
};

export default fp(helmetPlugin);
