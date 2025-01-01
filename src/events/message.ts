import { Message } from 'discord.js';
import { CONFIG } from '../constants';

export const MessageCreateEvent = async (msg: Message): Promise<void> => {
  if (msg.author.bot || !msg.content.includes(CONFIG.PREFIX)) return;

  // TODO: Implement Command Handler
};
