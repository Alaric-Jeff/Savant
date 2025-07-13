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
            }
        })

        return user;

    }catch(err: unknown){
        throw err;
    }
}

export default createUser;