import { Client, CommandInteraction, Interaction } from "discord.js";
import FeaturesFlag from "../../../utilities/featureFlag";
import { join } from 'path';
import actionsLoader from "../../../utilities/actionLoader";
const actionsFolder = join(__dirname, '/actions');

export default async function commandInteraction(client : Client, interaction : Interaction){
    const features = await FeaturesFlag();
    const cmdInteraction = interaction as CommandInteraction;
    const commandName = cmdInteraction.commandName;
    const actions = await actionsLoader(actionsFolder);
    const actionToExecute = actions.find((a) => a.name === commandName);
    if(actionToExecute && features.hasOwnProperty(actionToExecute.name) && features[actionToExecute.name] === true){
        await actionToExecute.execute(interaction);
    }else{
        console.log("Command not found.");
    }
}