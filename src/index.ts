import 'dotenv/config';
import loadEvents from "./libraries/eventHandling";
import client from "./bot";
import logger from './utilities/logger';

// Login Into Bot and Loading Events, Commands
client.login(process.env.BOT_TOKEN).then(()=>{
    loadEvents(client, process.env.BOT_TOKEN, process.env.CLIENT_ID, process.env.GUILD_ID);
}).catch(err => {
    logger.error(err);
})