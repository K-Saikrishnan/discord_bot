import { ChatInputCommandInteraction, InteractionReplyOptions, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../types';

export const random: Command = {
  data: new SlashCommandBuilder()
    .setName('toss')
    .setDescription('Toss a coin')
    .setNSFW(false)
    .addBooleanOption((option) =>
      option.setName('public').setDescription('Share to everyone in the chat').setRequired(false),
    ),
  run: async (interaction: ChatInputCommandInteraction) => {
    const isEphemeral = !interaction.options.getBoolean('public');
    const flipOutcome = Math.random() < 0.5 ? 'Heads' : 'Tails';

    const reply: InteractionReplyOptions = { content: `🪙  ${flipOutcome}` };
    if (isEphemeral) {
      reply.flags = MessageFlags.Ephemeral;
    }

    await interaction.reply(reply);
  },
};
