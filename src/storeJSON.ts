import fs from 'fs/promises';

export async function storeJSON(json: string) {
  fs.writeFile('./emojis.json', json);
}
