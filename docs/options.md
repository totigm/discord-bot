<h1 align="center">⚙ Options ⚙</h1>

Your bot can be customized if you want it to have a different behaviour. The options that it supports are:

- [client](#client)
- [bot](#bot)

## client

This is an object that contains the options that will be passed to the [discord.js v12](https://v12.discordjs.guide) client. You can find the options that it supports in the following links:
- [Client options](https://v12.discordjs.guide/additional-info/changes-in-v12.html#clientoptions)
- [More about client options](https://v12.discordjs.guide/additional-info/changes-in-v12.html#clientoptions-2)

## bot

This is an object that contains the options that will be passed to the [@totigm/bot-builder](https://www.npmjs.com/package/@totigm/bot-builder) library. You can find the options that it supports [here](https://github.com/totigm/bot-builder/blob/main/docs/bot-options.md).

Note that you won't be able to change the `contentProp`, `textFormatting`, `messageEvent`, nor `authData` properties, as they are fixed to match the [discord.js](https://discord.js.org) library.
