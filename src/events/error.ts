import { ErrorEvent } from "discord.js"
import logger from "../utilities/logger"

export default {
    name : "error",
    once : false,
    execute (error : ErrorEvent){
        logger.error('Discord.js error:', error);
    }
}