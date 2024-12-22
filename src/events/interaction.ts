import { Interaction } from 'discord.js';
import { COMMANDS } from '../utils';

export const InteractionEvent = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isCommand()) return;

  const command = COMMANDS.find((cmd) => cmd.data.name === interaction.commandName);
  if (command) {
    await command.run(interaction);
  }
};
