import { Guild, GuildMember } from "discord.js"
import database from "../index";
import bot from "../../index";

export default (): void => {
    bot.client.guilds.cache.map(( guild: Guild ) => {
        let activePlayers: number = 0;

        guild.members.cache.map(( member: GuildMember ) => {
            if(member.presence.status !== "offline")
                activePlayers++;
        })

        const data: any = {
            maxplayers: guild.memberCount,
            players: activePlayers
        }

        console.log(data);

        database.collection("servers").doc(guild.id).set(data)
            .then(() => console.log(`Added guild: ${guild.id}`))
            .catch(( error: string ) => console.log(error));
    })
}