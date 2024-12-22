import { Client, GatewayIntentsString } from 'discord.js';

import { InteractionEvent } from './events/interaction';
import { ReadyEvent } from './events/ready';
import { CONFIG, validateEnvVars } from './utils';

(async () => {
  if (!validateEnvVars()) process.exit(1);

  console.log('Starting Bot...');

  const INTENTS: GatewayIntentsString[] = ['Guilds', 'GuildMessages', 'GuildMessageReactions'];
  const BOT = new Client({ intents: INTENTS });

  BOT.on('ready', async () => await ReadyEvent(BOT));
  BOT.on('interactionCreate', async (interaction) => await InteractionEvent(interaction));

  await BOT.login(CONFIG.BOT_TOKEN);
})();
