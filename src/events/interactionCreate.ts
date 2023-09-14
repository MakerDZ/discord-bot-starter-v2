import { Interaction, Client } from "discord.js"
import commandInteraction from "../services/Interactions/commands/commandInteraction";
import showError from "../components/general/showError";
import logger from "../utilities/logger"

export default {
    name : "interactionCreate",
    once : false,
    async execute (interaction : Interaction, client : Client , BOT_TOKEN : string, CLIENT_ID : string , GUILD_ID : string) {
        if(!interaction.isChatInputCommand() && !interaction.isButton()) return;

        if(interaction.isChatInputCommand()){
            try {
                await commandInteraction(client, interaction)
            } catch (error) {
                interaction.reply(showError(error));
                logger.error(error);
            }
        }
    }
}