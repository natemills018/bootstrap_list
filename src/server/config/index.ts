import dotenv from 'dotenv';


dotenv.config();


const mongo  = {
    url: process.env.MONGO_URL as string,
}

const jwt = {
    secret: process.env.JWT_SECRET as string,
    expiration: process.env.JWT_EXPIRATION as string
}


if (!mongo.url) {
    throw new Error ("Missing mongo url!!")
}



export default {
    mongo,
    jwt
}