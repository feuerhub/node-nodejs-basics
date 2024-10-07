import { Transform } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().trim().split('').reverse().join('') + '\n';
            callback(null, reversedText);
        }
    })
    process.stdin.pipe(myTransform).pipe(process.stdout);
};

await transform();