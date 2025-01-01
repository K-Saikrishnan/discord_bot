import { Command } from '../utils/types';
import { phasmo } from './fun/phasmo';
import { ping } from './utility/ping';
import { random } from './utility/random';
import { toss } from './utility/toss';
import { uptime } from './utility/uptime';

const commands = [phasmo, ping, random, toss, uptime];

export const COMMANDS: Map<string, Command> = Object.freeze(
  new Map(commands.map((command) => [command.cmd.name, command])),
);
