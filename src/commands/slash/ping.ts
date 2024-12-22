import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, MessageFlags, bold } from 'discord.js';
import { Command } from '../../types';

export const ping: Command = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Bot Ping').setNSFW(false),
  run: async (interaction: CommandInteraction) => {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true, flags: MessageFlags.Ephemeral });

    interaction.editReply(`${bold('Ping')}: ${sent.createdTimestamp - interaction.createdTimestamp} ms`);
  },
};
