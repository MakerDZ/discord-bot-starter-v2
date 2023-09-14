import { Routes } from "discord.js";
import { REST } from '@discordjs/rest';
import * as fs from 'fs';
import { join } from 'path';

const commands : any = [];
const commandFolder = join(__dirname, '..', 'commands')
const commandFiles = fs.readdirSync(commandFolder).filter(file => file.endsWith('.ts') || file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(join(commandFolder, file));
  commands.push(command.default);
}

export default async function loadCommands(BOT_TOKEN : string, CLIENT_ID : string , GuildIds: Array<string>){
    const rest = new REST({version : '10'}).setToken(BOT_TOKEN);
    try {
      console.log(`Started refreshing ${commands.length} application (/) commands.`);
      await rest.put(
        Routes.applicationCommands(CLIENT_ID),
        { body: commands },
      );
      console.log('Successfully reloaded application (/) commands.');
    } 
    catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
  }