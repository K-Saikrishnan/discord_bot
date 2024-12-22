import { SlashCommandBuilder } from '@discordjs/builders';
import { ChatInputCommandInteraction, MessageFlags } from 'discord.js';
import { Command } from '../../types';

export const ping: Command = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Bot Ping').setNSFW(false),
  run: async (interaction: ChatInputCommandInteraction) => {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true, flags: MessageFlags.Ephemeral });

    interaction.editReply(`🛜  ${sent.createdTimestamp - interaction.createdTimestamp} ms`);
  },
};
