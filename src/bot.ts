import { Client, GatewayIntentBits, ActivityType, Partials } from "discord.js"; 

//Initializing Intents
const client = new Client({
    intents : [ 
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials : [
        Partials.Channel,
        Partials.Message
    ],
    presence: {
        status: 'online',
        afk: false,
        activities: [{
            name: "Tasks 👀",
            type: ActivityType.Watching,
        }],
    },
})

export default client;