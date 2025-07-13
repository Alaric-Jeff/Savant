import { FastifyInstance } from "fastify";
import createUser from "@services/userServices/createUser.js";
import createUserController from "@controllers/userControllers.ts/createUserController.js";

export default async function userRoutes(fastify: FastifyInstance){
    fastify.route({
        method: `POST`,
        url: 'api/user/create-user',
        schema: {
            body: createUser
        }, 
        handler: createUserController
    })
}