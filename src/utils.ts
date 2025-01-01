import { CONFIG } from './constants';

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
