import { Client } from "discord.js";
import { options } from "../config";

import { ready, guildMemberAdd, guildMemberRemove, presenceUpdate } from "./events";

export default class{
    public client: Client;

    constructor(){
        this.client = new Client();
    }

    public start = (): void => {
        console.log("Loading bot...");

        this.client.on('ready', ready);
        this.client.on('guildMemberAdd', guildMemberAdd);
        this.client.on('guildMemberRemove', guildMemberRemove);
        this.client.on('presenceUpdate', presenceUpdate);

        this.client.login(options.token);
    }
}