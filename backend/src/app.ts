import Fastify from "fastify";
import prismaPlugin from "./plugins/prismaPlugin.js";
import jwtPlugin from "@plugins/jwtPlugin.js";
import compression from '@fastify/compress'
import cookiePlugin from "@plugins/cookiePlugin.js";
import oath2Plugin from "@plugins/oath2Plugin.js";
import helmetPlugin from "@plugins/helmetPlugin.js";
import rateLimitPlugin from "@plugins/rateLimitPlugin.js";
import dotenv from 'dotenv'

dotenv.config()
const fastify = Fastify({
    logger: true
})

fastify.register(helmetPlugin);
fastify.register(oath2Plugin);
fastify.register(rateLimitPlugin);
fastify.register(prismaPlugin);
fastify.register(jwtPlugin);
fastify.register(cookiePlugin);
fastify.register(compression, {
    threshold: 1024,
    encodings: ['br', 'gzip']
});

const http_port = process.env.http_port? Number(process.env.http_port) : 3000;
const host = process.env.host? String(process.env.host) : "127.0.0.1";

try{
    fastify.listen({
        port: http_port,
        host: host
    }).then(()=> {
        fastify.log.info(`Server is running on server ${http_port}, hosted with: ${host}`);
    });

}catch(err: unknown){
    if(err instanceof Error){
        fastify.log.error(`Error occured in starting the server, error: ${err.name}, message: ${err.message}, stack: ${err.stack}`);
    }else{
        fastify.log.error(`Unknown error occured in starting the server: ${err}`);
    }
    fastify.close().then(()=> {
        process.exit(1);
    });
}

