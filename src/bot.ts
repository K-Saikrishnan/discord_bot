import { Client, Events, GatewayIntentsString } from 'discord.js';

import { InteractionEvent } from './events/interaction';
import { MessageCreateEvent } from './events/message';
import { ReadyEvent } from './events/ready';
import { CONFIG, validateEnvVars } from './utils';

(async () => {
  if (!validateEnvVars()) process.exit(1);

  console.log('Starting Bot...');

  const INTENTS: GatewayIntentsString[] = ['Guilds', 'GuildMessages', 'GuildMessageReactions', 'MessageContent'];
  const BOT = new Client({ intents: INTENTS });

  BOT.on(Events.ClientReady, async () => await ReadyEvent(BOT));
  BOT.on(Events.InteractionCreate, async (interaction) => await InteractionEvent(interaction));
  BOT.on(Events.MessageCreate, async (msg) => await MessageCreateEvent(msg));

  await BOT.login(CONFIG.BOT_TOKEN);
})();
