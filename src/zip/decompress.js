import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const gunzip = createGunzip();
    const source = createReadStream(resolve(__dirname, './files/archive.gz'));
    const destination = createWriteStream(resolve(__dirname, './files/fileToCompress.txt'));
    pipeline(source, gunzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

await decompress();