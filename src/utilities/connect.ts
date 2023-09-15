import mongoose from "mongoose";
import logger from './logger'

async function connect(){
    const dbUri = process.env.DB_URI as string;
    try {
        await mongoose.connect(dbUri);
        logger.info('db connection established');
    } catch(error){
        logger.info(`db connection error.\n ${error}`);
        process.exit(1);
    }
}

export default connect;