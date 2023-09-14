import { CommandInteraction, Interaction } from "discord.js"
import reply_with_pong from "../../../../components/general/reply-with-pong";

export default {
    name : "ping",
    async execute (interaction : CommandInteraction) {
        await interaction.reply(reply_with_pong());
    }
}