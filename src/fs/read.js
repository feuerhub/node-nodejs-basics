import { readFile } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/fileToRead.txt');
    readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            throw new Error("FS operation failed");
        }   
        console.log(data);
    });
};

await read();