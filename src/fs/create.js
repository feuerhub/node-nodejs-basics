import { access, constants, writeFile } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/fresh.txt');
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            writeFile(filePath, 'I am fresh and young', (err) => {if (err) throw new Error('FS operation failed')});
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await create();