import Bot from "@totigm/bot-builder";
import { Client, Message } from "discord.js";
import { DiscordBotOptions } from "../types";

export default class DiscordBot extends Bot<Client, Message> {
    constructor(token, options: DiscordBotOptions = {}) {
        const client = new Client(options.client);

        super(client, {
            contentProp: "content",
            messageEvent: "message",
            textFormatting: {
                bold: "**",
                italic: "*",
                underline: "__",
                strikethrough: "~~",
                code: "`",
            },
            ...options.bot,
            authData: token,
        });
    }

    protected auth(token: string) {
        this.client.login(token);
    }
}
