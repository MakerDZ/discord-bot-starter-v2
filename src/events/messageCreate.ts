import { Client, ClientUser, Message } from "discord.js"
import axios from "axios";

export default {
    name : 'messageCreate',
    once : false,
    async execute(message : Message ,client : Client){
        if (message.guild) return;

        
        //+++++++++++++++++++++++++++++++++++++++++++
        /*           Business Logic          */

        // check if the sender id is on matching or not.
        // if onmatched get the matched_session_data by sender id from caching server.
        // prepare dataset for deliver message. { send_this message , to_this_id , at_this_platform , with_this_name , with_this_pfp }.
        // hit to universal message delivery endpoint with that prepared dataset.
        //+++++++++++++++++++++++++++++++++++++++++++

        //+++++++++++++++++++++++++++++++++++++++++++
        /*       Universal Message Delivery       */

        //if POST request controller receive request data, check platform, then hit endpoint to that platform, api/v1/createMessageAtDiscordQuickMatch , api/v1/createMessageAtMessengerQuickMatch , api/v1/createMessageAtDiscordEnvelopeMatch , , api/v1/createMessageAtMessengerEnvelopeMatch
        //Discord bot will have express endpoint for creating message. Message bot will have express endpoint to create message.
        //Services inside that endpoint gonna be adaptable. Each endpoint know their UI components, they will process the received data that their own UI component.
        //+++++++++++++++++++++++++++++++++++++++++++
        const client_id = message.author.id;
        const message_content = message.content;
        if(client_id == '1129563692418203668') return;
        const matched = {
            matched_users : [
                {
                    platform : 'Discord',
                    platform_id : '696735113907667005',
                    tempo_name : 'Dsc God',
                }, 
                {
                    platform : 'Messenger',
                    platform_id : '5467411990004171',
                    tempo_name : 'Msg Kid'
                }
            ],
        }
        const oppositeUser = matched.matched_users.find(user => user.platform_id !== client_id);
        const clientUser = matched.matched_users.find(user => user.platform_id === client_id);
        const to_send = { platform : oppositeUser?.platform, platform_id : oppositeUser?.platform_id , tempo_name : clientUser?.tempo_name, message : message_content}
        async function sendPostRequest(apiUrl : string, data : unknown, headers : any) {
            try {
              const response = await axios.post(apiUrl, data, { headers });
              console.log('Response:', response.data);
            } catch (error) {
              console.error('An error occurred:', error);
            }
        }
        const api = 'https://1e9d-62-171-185-226.ngrok-free.app/api/delivery';
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer YOUR_ACCESS_TOKEN'
          };
        sendPostRequest(api, to_send , headers);
    }
}