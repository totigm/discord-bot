<h1 align="center">Welcome to <b>@totigm/discord-bot</b> 👋</h1>

<p>
  <a href="https://www.npmjs.com/package/@totigm/discord-bot" target="_blank">
    <img alt="NPM version" src="https://img.shields.io/npm/v/@totigm/discord-bot">
  </a>
  <a href="https://github.com/totigm/discord-bot" target="_blank">
    <img alt="GitHub repo" src="https://img.shields.io/badge/GitHub-@totigm/discord--bot-green?style=flat&logo=github">
  </a>
  <a href="https://www.npmjs.com/package/@totigm/discord-bot" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/@totigm/discord-bot" />
  </a>
  <a href="https://github.com/totigm/discord-bot/actions/workflows/main.yml" target="_blank">
    <img alt="CI" src="https://github.com/totigm/discord-bot/actions/workflows/main.yml/badge.svg" />
  </a>
  <a href="https://github.com/totigm/discord-bot/stargazers" target="_blank">
    <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/totigm/discord-bot?style=flat">
  </a>
  <a href="https://github.com/totigm/discord-bot#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen" />
  </a>
  <a href="https://github.com/totigm/discord-bot/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/totigm/discord-bot" />
  </a>
</p>

## 📄 Introduction

This is a library to create Discord bots. It is a Discord implementation of the [@totigm/bot-builder](https://www.npmjs.com/package/@totigm/bot-builder) package, which handles all the commands stuff behind the scenes, so you can focus on your bot's logic.

> The [discord.js v12](https://v12.discordjs.guide) library is being used.

## 🔗 Quick links

- [Reference documentation](./docs/reference.md)
- [Options](#⚙️-options)
- [Set up a discord bot](https://v12.discordjs.guide/preparations/setting-up-a-bot-application.html)
- [Discord.js v12 docs](https://v12.discordjs.guide)
- [Bot builder](https://www.npmjs.com/package/@totigm/bot-builder)
- [WhatsApp bot](https://www.npmjs.com/package/@totigm/whatsapp-bot)
- [GitHub](https://github.com/totigm/discord-bot#readme)
- [NPM](https://www.npmjs.com/package/@totigm/discord-bot)

## 💻 Installation

```sh
npm i @totigm/discord-bot
```

or

```sh
yarn add @totigm/discord-bot
```

## 🚀 Getting started

Check [this tutorial](https://v12.discordjs.guide/preparations/setting-up-a-bot-application.html) on how to create a discord bot.

Start adding commands to your bot by checking the [reference documentation](./docs/reference.md).

## 🤖 Example usage

```ts
import DiscordBot from "@totigm/discord-bot";

const bot = new DiscordBot("YOUR_DISCORD_BOT_TOKEN");

bot.addCommand("hey", (message) => `Hey ${message.author.username}! How are you doing?`, {
    description: "Say hey",
    explanation: "The bot will say hey to the user using their Discord's name",
    example: {
        output: "Hey Toti! How are you doing?",
    },
});
```

The previous code will create a bot that works like this:

![bot conversation](https://user-images.githubusercontent.com/64804554/185551989-2beacc0e-8026-47fa-8f12-2820ef412a86.png)

## ⚙️ Options

When you create a bot, you can pass an options object to customize it. Check its [options](./docs/options.md) documentation for more information.

```ts
const options = { ... };

const bot = new DiscordBot("YOUR_BOTS_TOKEN", options);
```

## 👤 Author

<a href="https://github.com/totigm" target="_blank">
  <img alt="GitHub: totigm" src="https://img.shields.io/github/followers/totigm?label=Follow @totigm&style=social">
</a>
<br>
<a href="https://twitter.com/totigm8" target="_blank">
  <img alt="Twitter: totigm8" src="https://img.shields.io/twitter/follow/totigm8?style=social" />
</a>
<br>
<a href="https://linkedin.com/in/totigm" target="_blank">
  <img alt="LinkedIn: totigm" src="https://img.shields.io/badge/LinkedIn-@totigm-green?style=social&logo=linkedin" />
</a>
<br>
<a href="https://www.npmjs.com/~totigm" target="_blank">
  <img alt="NPM: totigm" src="https://img.shields.io/badge/NPM-@totigm-green?style=social&logo=npm" />
</a>

## 🤝 Contributing

Contributions are more than welcome!

We think that you might have great ideas to make this project even better. If you do, please create a pull request and/or issue following the [contribution guidelines](./docs/CONTRIBUTING.md).

## ⭐️ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Toti Muñoz](https://github.com/totigm).<br />
This project is [MIT](https://github.com/totigm/discord-bot/blob/master/LICENSE) licensed.

---

This project was made with ❤ and TypeScript
