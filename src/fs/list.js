import { readdir } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files');
    readdir(filePath, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(files);
    })
};

await list();