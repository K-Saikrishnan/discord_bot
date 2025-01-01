import { phasmo } from './commands/phasmo';
import { ping } from './commands/ping';
import { random } from './commands/random';
import { toss } from './commands/toss';
import { uptime } from './commands/uptime';
import { Command } from './types';

const commands = [phasmo, ping, random, toss, uptime];

export const COMMANDS: Map<string, Command> = Object.freeze(
  new Map(commands.map((command) => [command.cmd.name, command])),
);
