import { rename as renameFile, access, constants } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/wrongFilename.txt');
    const newFilePath = resolve(__dirname, './files/properFilename.md');
    access(newFilePath, constants.F_OK, (err) => {
        if (err) {
            renameFile(filePath, newFilePath, (err) => {
                if (err) {
                    throw new Error("FS operation failed");
                }
            });
        } else {
            throw new Error("FS operation failed");
        }
    });
};

await rename();