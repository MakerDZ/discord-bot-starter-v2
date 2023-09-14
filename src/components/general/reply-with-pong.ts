import { EmbedBuilder } from "discord.js";

export default function reply_with_pong(){
    const reply = new EmbedBuilder()
                .setColor(0x7047EA)
                .setTitle('🏓  replied with Pong!!\n\n\n')
    return {embeds: [reply] , ephemeral: true};
}