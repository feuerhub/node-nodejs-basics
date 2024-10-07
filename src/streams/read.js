import { createReadStream } from 'fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/fileToRead.txt');
    const stream = createReadStream(filePath);
    stream.on('end', () => {
        console.log('');
    });
    stream.pipe(process.stdout);
};

await read();

