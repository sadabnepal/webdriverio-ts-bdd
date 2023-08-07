import fs from 'fs';
import { logStep } from './AssertionUtils';

export const deleteDirectory = (path: string) => {
    if (fs.existsSync(path)) {
        fs.rmdirSync(path, { recursive: true })
        logStep(`Directory Deleted: ${path}`)
    }
}