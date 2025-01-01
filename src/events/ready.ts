import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Client } from 'discord.js';
import { COMMANDS } from '../commands/commands';
import { CONFIG } from '../utils/constants';

export const ReadyEvent = async (BOT: Client): Promise<void> => {
  try {
    const rest = new REST().setToken(CONFIG.BOT_TOKEN);
    const commands = Array.from(COMMANDS.values()).map((command) => command.cmd.toJSON());

    console.log(`Registering ${commands.length} Slash Command(s)`);
    await rest.put(Routes.applicationCommands(CONFIG.APPLICATION_ID), { body: commands });
    console.log(`Bot Online! ${BOT?.user?.tag}`);
  } catch (err) {
    console.log('Ready Event Error: ', err);
  }
};
