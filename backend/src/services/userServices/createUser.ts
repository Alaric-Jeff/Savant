import { FastifyInstance } from "fastify";

async function createUser(
    fastify: FastifyInstance, 
    provider: string,
    providerId: string, 
    email?: string | '',
    username?: string | '',
    displayName?: string | '',
    avatarUrl?: string | ''
): Promise<object> {
    try{
        const user = await fastify.prisma.user.create({
            data: {
                provider,
                providerId,
                email,
                username,
                displayName,
                avatarUrl
            }, select: {
                providerId: true
            }
        })

        return user;
    }catch(err: unknown){
        fastify.log.error(`Error occured in services`);
        if(err instanceof Error){
            fastify.log.error(`Error occured in services`);
        }else{
            fastify.log.error(`Unknown error occured in services`);
        }
        throw err;
    }
}

export default createUser;