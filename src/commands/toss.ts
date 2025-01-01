import { ChatInputCommandInteraction, EmbedBuilder, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { EMBED_COLOR } from '../constants';
import { Command } from '../types';

export const toss: Command = {
  cmd: new SlashCommandBuilder().setName('toss').setDescription('Toss a coin').setNSFW(false),
  run: async (interaction: ChatInputCommandInteraction) => {
    const flipOutcome = Math.random() < 0.5 ? 'Heads' : 'Tails';

    const embed = new EmbedBuilder().setColor(EMBED_COLOR).setTitle(`🪙  ${flipOutcome}`);

    await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  },
};
