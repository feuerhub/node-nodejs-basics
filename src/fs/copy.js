import { cp } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files');
    const destinationPath = resolve(__dirname, './files_copy');
    cp(filePath, destinationPath, {recursive: true},  (err) => {if (err) throw err});
};

await copy();
