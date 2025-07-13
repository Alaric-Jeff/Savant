import { FastifyRequest, FastifyReply} from "fastify";
import createUser from "@services/userServices/createUser.js";
import { CreateUserInput } from "schemas/user/userSchemas.js";

const createUserController = async (request: FastifyRequest<{Body: CreateUserInput}>, reply: FastifyReply) => {

         const {
            email,
            username,
            displayName,
            avatarUrl,
            provider,
            providerId
        } = request.body;

        if(!provider || !providerId){
            reply.log.error(`provider or provider Id is undefined, provider: ${provider}, id: ${providerId}`)
            return reply.code(404).send({
                success: false,
                message: "Incomplete required fields"
            })
        }

    try{


        const user = await createUser( request.server ,email, username, displayName, avatarUrl, provider, providerId);

        if(!user){
            reply.log.debug(`User is undefined`)
            return reply.code(404).send({
                success: false, 
                message: "Failed to create user"
            })
        }

        return reply.code(200).send({
            success: true,
            message: `Successfully created user`,
            data: user
        })

    }catch(err: unknown){
        return reply.code(500).send({
            success: false,
            message: "Internal server error"
        })
    }
}

export default createUserController;