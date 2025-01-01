import { Interaction } from 'discord.js';
import { COMMANDS } from '../commands';

export const InteractionEvent = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  const command = COMMANDS.get(interaction.commandName);
  if (command) await command.run(interaction);
};
