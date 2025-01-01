import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../utils/types';
import { createEmbed } from '../../utils/utils';

export const toss: Command = {
  cmd: new SlashCommandBuilder().setName('toss').setDescription('Toss a coin').setNSFW(false),
  run: async (interaction: ChatInputCommandInteraction) => {
    const flipOutcome = Math.random() < 0.5 ? 'Heads' : 'Tails';

    const embed = createEmbed().setTitle(`🪙  ${flipOutcome}`);

    await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  },
};
