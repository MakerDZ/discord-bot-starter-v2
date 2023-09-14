import fs from 'fs';
import { join } from 'path';

export default async function actionsLoader(actionsFolder: string) {
    const actionFiles = fs.readdirSync(actionsFolder).filter(file => file.endsWith('.ts',) || file.endsWith('.js'));

    const actions = [];

    for (const file of actionFiles) {
        const actionModule = await import(join(actionsFolder, file));
        actions.push({
            name: actionModule.default.name,
            execute: actionModule.default.execute, 
        });
    }

    return actions;
}
