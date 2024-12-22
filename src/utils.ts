import * as fs from 'fs';
import * as path from 'path';

import { Command } from './types';

export const CONFIG = Object.freeze({
  BOT_TOKEN: process.env['BOT_TOKEN'] as string,
  APPLICATION_ID: process.env['APPLICATION_ID'] as string,
  PREFIX: process.env['PREFIX'] as string,
});

export function validateEnvVars(): boolean {
  const missingEnvVars = new Map<string, string>();

  for (const [key, value] of Object.entries(CONFIG)) {
    if (!value) missingEnvVars.set(key, value);
  }

  if (missingEnvVars.size) {
    console.error(`Missing Environment Variables: ${[...missingEnvVars.keys()].join(', ')}`);
    return false;
  }

  return true;
}

export const COMMANDS = ((): Command[] => {
  const commands: Command[] = [];

  const JS_EXTENSION = '.js';
  const foldersPath = path.join(__dirname, 'commands');
  const commandsFolders = fs.readdirSync(foldersPath);

  for (const folder of commandsFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(JS_EXTENSION));

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const command = require(filePath);
      const key = Object.keys(command)[0];
      commands.push(command[key]);
    }
  }
  return commands;
})();
