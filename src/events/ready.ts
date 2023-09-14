import { Client } from "discord.js"
import loadCommands from "../libraries/commandHandling";
import logger from "../utilities/logger";

export default {
    name : 'ready',
    once : true,
    execute(client : Client , data : Client, BOT_TOKEN : string, CLIENT_ID : string , GUILD_ID : string){
        logger.info(`${client.user?.tag} is logged in.`);
        const guilds = client.guilds.cache;
        const guildIds = guilds.map(guild => guild.id);
        loadCommands(BOT_TOKEN, CLIENT_ID, guildIds);
    }
}