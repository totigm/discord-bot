import { ClientOptions } from "discord.js";
import { Options as BotBuilderOptions } from "@totigm/bot-builder";

type BotOptions = Omit<BotBuilderOptions, "contentProp" | "textFormatting" | "messageEvent" | "authData">;

export type DiscordBotOptions = {
    client?: ClientOptions;
    bot?: BotOptions;
};
