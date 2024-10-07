import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = resolve(__dirname, './files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);
    stream.on('data', (chunk) => {
        hash.update(chunk);
    })
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    })
};

await calculateHash();