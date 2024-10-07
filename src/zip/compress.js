import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const gzip = createGzip();
    const source = createReadStream(resolve(__dirname, './files/fileToCompress.txt'));
    const destination = createWriteStream(resolve(__dirname, './files/archive.gz'));
    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

await compress();