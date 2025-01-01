import { ChatInputCommandInteraction, EmbedBuilder, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { EMBED_COLOR } from '../constants';
import { Command } from '../types';

export const random: Command = {
  cmd: new SlashCommandBuilder()
    .setName('random')
    .setDescription('Generate random number between min and max')
    .setNSFW(false)
    .addIntegerOption((option) => option.setName('min').setDescription('Min').setRequired(true))
    .addIntegerOption((option) => option.setName('max').setDescription('Max').setRequired(true)),
  run: async (interaction: ChatInputCommandInteraction) => {
    const [max, min] = [interaction.options.getInteger('max')!, interaction.options.getInteger('min')!];

    const embed = new EmbedBuilder().setColor(EMBED_COLOR).setTitle(`🎲  ${getRandomNum(min, max)}`);

    await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  },
};

function getRandomNum(min: number, max: number) {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
