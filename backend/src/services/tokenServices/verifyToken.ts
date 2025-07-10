import jwt, { JwtPayload, TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

function verifyToken(token: string): JwtPayload{

    const key = process.env.ACCESS_TOKEN_SECRET;

    if(!key){
        throw new Error("ACCESS_TOKEN_SECRET is missing");
    }

    try{
        return jwt.verify(token, key) as JwtPayload
    }catch(err: unknown) {
        if(err instanceof TokenExpiredError){
            throw new Error(`Expired token`)
        }else if(err instanceof JsonWebTokenError){
            throw new Error(`Invalid token`)
        }
        throw new Error(`Token verification failed`)
    }
}

export default verifyToken;