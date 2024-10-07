import { unlink } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/fileToRemove.txt');
    unlink(filePath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await remove();