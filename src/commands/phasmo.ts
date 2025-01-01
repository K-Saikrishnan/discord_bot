import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';
import { ChatInputCommandInteraction } from 'discord.js';
import { EMBED_COLOR } from '../constants';
import { Command } from '../types';

export const phasmo: Command = {
  cmd: new SlashCommandBuilder()
    .setName('phasmo')
    .setDescription('Create Phasmophobia Invite')
    .setNSFW(false)
    .addIntegerOption((option) =>
      option.setName('lobby').setDescription('Lobby Link').setRequired(true).setMinValue(99_999).setMaxValue(999_999),
    )
    .addIntegerOption((option) =>
      option
        .setName('journal')
        .setDescription('Journal Link')
        .setRequired(true)
        .setMinValue(99_999)
        .setMaxValue(999_999),
    ),
  run: async (interaction: ChatInputCommandInteraction) => {
    const [lobby, journal] = [interaction.options.getInteger('lobby')!, interaction.options.getInteger('journal')!];

    const embed = new EmbedBuilder()
      .setColor(EMBED_COLOR)
      .setTitle(`Let's play Phasmophobia!`)
      .setThumbnail('https://imgur.com/euDY2VF.png')
      .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
      .addFields([
        { name: 'Lobby Link', value: lobby.toString(), inline: true },
        { name: 'Journal Link', value: `DL-${journal.toString()}`, inline: true },
      ]);

    interaction.reply({ embeds: [embed] });
  },
};
