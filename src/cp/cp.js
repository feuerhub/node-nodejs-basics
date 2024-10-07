import { spawn } from 'child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const scriptPath = resolve(__dirname, './files/script.js');
    const child = spawn('node', [scriptPath, ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['argument1', 'argument2', 'argument3']);

