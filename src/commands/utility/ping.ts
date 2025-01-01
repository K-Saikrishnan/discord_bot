import { SlashCommandBuilder } from '@discordjs/builders';
import { ChatInputCommandInteraction, MessageFlags } from 'discord.js';
import { Command } from '../../utils/types';
import { createEmbed } from '../../utils/utils';

export const ping: Command = {
  cmd: new SlashCommandBuilder().setName('ping').setDescription('Bot Ping').setNSFW(false),
  run: async (interaction: ChatInputCommandInteraction) => {
    const initialEmbed = createEmbed().setTitle(`Pinging...`);

    const initialReply = await interaction.reply({
      embeds: [initialEmbed],
      fetchReply: true,
      flags: MessageFlags.Ephemeral,
    });

    const embed = createEmbed().setTitle(`🛜  ${initialReply.createdTimestamp - interaction.createdTimestamp} ms`);

    interaction.editReply({ embeds: [embed] });
  },
};
