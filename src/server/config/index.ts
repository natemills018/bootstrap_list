import dotenv from 'dotenv';


dotenv.config();


const mongo  = {
    url: process.env.MONGO_URL as string,
}


if (!mongo.url) {
    throw new Error ("Missing mongo url!!")
}



export default {
    mongo
}