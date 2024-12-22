import { ChatInputCommandInteraction, InteractionReplyOptions, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../types';

export const random: Command = {
  data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('Generate random number between min and max')
    .setNSFW(false)
    .addIntegerOption((option) => option.setName('min').setDescription('Min').setRequired(false))
    .addIntegerOption((option) => option.setName('max').setDescription('Max').setRequired(false)),
  run: async (interaction: ChatInputCommandInteraction) => {
    const isEphemeral = !interaction.options.getBoolean('public');
    const [max, min] = [interaction.options.getInteger('max')!, interaction.options.getInteger('min')!];

    const reply: InteractionReplyOptions = { content: `🎲  ${getRandomNum(min, max)}` };
    if (isEphemeral) {
      reply.flags = MessageFlags.Ephemeral;
    }

    await interaction.reply(reply);
  },
};

function getRandomNum(min: number, max: number) {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
