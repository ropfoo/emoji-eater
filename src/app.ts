import { getEmojiGroups } from './categories';
import { storeJSON } from './storeJSON';

async function init() {
  console.log('...loading emojis 🕜');
  const groups = await getEmojiGroups();
  const groupsJSON = JSON.stringify(groups);
  await storeJSON(groupsJSON);
  console.log('aaaaand its done 🙌');
}

init();
