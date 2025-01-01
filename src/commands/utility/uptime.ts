import { SlashCommandBuilder } from '@discordjs/builders';
import { ChatInputCommandInteraction, MessageFlags } from 'discord.js';
import { Command } from '../../utils/types';
import { createEmbed } from '../../utils/utils';

export const uptime: Command = {
  cmd: new SlashCommandBuilder().setName('uptime').setDescription('Bot Uptime').setNSFW(false),
  run: async (interaction: ChatInputCommandInteraction) => {
    const humanReadableUptime = toHumanReadableTime(interaction.client.uptime);
    const embed = createEmbed().setTitle(`⏱️  ${humanReadableUptime}`);

    await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  },
};

function toHumanReadableTime(uptime: number) {
  const SECONDS_IN_DAY = 86400,
    SECONDS_IN_HOUR = 3600,
    SECONDS_IN_MINUTE = 60;

  let totalSeconds = uptime / 1000;

  const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
  totalSeconds %= SECONDS_IN_DAY;

  const hours = Math.floor(totalSeconds / SECONDS_IN_HOUR);
  totalSeconds %= SECONDS_IN_HOUR;

  const minutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
  const seconds = Math.floor(totalSeconds % SECONDS_IN_MINUTE);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
