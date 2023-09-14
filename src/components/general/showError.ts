import { EmbedBuilder } from "discord.js";

export default function showError(error : any){
    const reply = new EmbedBuilder()
                .setColor(0xFF0033)
                .setTitle('⚠️ Some error is happening while interacting with the bot.')
                .setDescription(`${error}`)
    return {embeds: [reply] , ephemeral: true};
}