import { Client, Events, GatewayIntentBits } from 'discord.js';

import { CONFIG } from './constants';
import { InteractionEvent } from './events/interaction';
import { MessageCreateEvent } from './events/message';
import { ReadyEvent } from './events/ready';
import { validateEnvVars } from './utils';

(async () => {
  if (!validateEnvVars()) process.exit(1);

  console.log('Starting Bot...');

  const INTENTS: GatewayIntentBits[] = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ];
  const BOT = new Client({ intents: INTENTS });

  BOT.on(Events.ClientReady, async () => await ReadyEvent(BOT));
  BOT.on(Events.InteractionCreate, async (interaction) => await InteractionEvent(interaction));
  BOT.on(Events.MessageCreate, async (msg) => await MessageCreateEvent(msg));

  await BOT.login(CONFIG.BOT_TOKEN);
})();
