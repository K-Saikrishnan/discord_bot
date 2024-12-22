import { REST } from '@discordjs/rest';
import { APIApplicationCommandOption, Routes } from 'discord-api-types/v9';
import { Client } from 'discord.js';
import { COMMANDS, CONFIG } from '../utils';

export const ReadyEvent = async (BOT: Client): Promise<void> => {
  try {
    const rest = new REST().setToken(CONFIG.BOT_TOKEN);
    const commands = COMMANDS.map(
      (command) =>
        command.data.toJSON() as {
          name: string;
          description?: string;
          type?: number;
          options?: APIApplicationCommandOption[];
        },
    );

    console.log(`Registering ${commands.length} Slash Command(s)`);
    await rest.put(Routes.applicationCommands(CONFIG.APPLICATION_ID), { body: commands });
    console.log(`Bot Online! ${BOT?.user?.tag}`);
  } catch (err) {
    console.log('Ready Event Error: ', err);
  }
};
