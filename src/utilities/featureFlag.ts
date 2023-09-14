import * as fs from 'fs/promises';
import { join } from 'path';


export default async function getFeatures() {
    const fileLocation = join(__dirname, '../../', 'features.json');
    const data = await fs.readFile(fileLocation, 'utf8');
    return JSON.parse(data);
}