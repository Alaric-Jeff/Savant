import Fastify from "fastify";
import prismaPlugin from "./plugins/prismaPlugin.js";
import compression from '@fastify/compress'
import dotenv from 'dotenv'

dotenv.config()
const fastify = Fastify({
    logger: true
})

fastify.register(prismaPlugin)
fastify.register(compression, {
    threshold: 1024
})

const http_port = process.env.http_port? Number(process.env.http_port) : 3000;
const host = process.env.host? String(process.env.host) : "127.0.0.1"

try{
    fastify.listen({
        port: http_port,
        host: host
    }).then(()=> {
        fastify.log.info(`Server is running on server ${http_port}, hosted with: ${host}`)
    })
}catch(err: unknown){
    if(err instanceof Error){
        fastify.log.error(`Error occured in starting the server, error: ${err.name}, message: ${err.message}, stack: ${err.stack}`)
    }else{
        fastify.log.error(`Unknown error occured in starting the server: ${err}`)
    }
    fastify.close().then(()=> {
        process.exit(1)
    });
}

