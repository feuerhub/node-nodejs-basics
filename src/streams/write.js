import { createWriteStream } from 'fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/fileToWrite.txt');
    const stream = createWriteStream(filePath);
    process.stdin.pipe(stream);
};

await write();