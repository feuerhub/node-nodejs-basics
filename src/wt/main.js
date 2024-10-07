import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const workerPath = resolve(__dirname, './worker.js');
    const cpuCores = cpus().length;
    const result = [];
    const workerPromises = [];
    for (let i = 0; i < cpuCores; i++) {
        workerPromises.push(new Promise((resolve, reject) => {
            const worker = new Worker(workerPath);
            worker.postMessage(10+i);
            worker.on('message', (n) => {
                result[i] = {status: 'resolved', data: n};
                resolve();
                worker.terminate();
            })
            worker.on('error', () => {
                result[i] = {status: 'error', data: null};
                reject();
                worker.terminate();
            })
        }))
    }
    await Promise.all(workerPromises);
    console.log(result);
};

await performCalculations();