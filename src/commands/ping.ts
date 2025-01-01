import { SlashCommandBuilder } from '@discordjs/builders';
import { ChatInputCommandInteraction, EmbedBuilder, MessageFlags } from 'discord.js';
import { EMBED_COLOR } from '../constants';
import { Command } from '../types';

export const ping: Command = {
  cmd: new SlashCommandBuilder().setName('ping').setDescription('Bot Ping').setNSFW(false),
  run: async (interaction: ChatInputCommandInteraction) => {
    const initialEmbed = new EmbedBuilder().setColor(EMBED_COLOR).setTitle(`Pinging...`);

    const initialReply = await interaction.reply({
      embeds: [initialEmbed],
      fetchReply: true,
      flags: MessageFlags.Ephemeral,
    });

    const embed = new EmbedBuilder()
      .setColor(EMBED_COLOR)
      .setTitle(`🛜  ${initialReply.createdTimestamp - interaction.createdTimestamp} ms`);

    interaction.editReply({ embeds: [embed] });
  },
};
