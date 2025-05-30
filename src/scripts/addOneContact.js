import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const prevContact = await readContacts();
  const newContact = await createFakeContact();
  await writeContacts([...prevContact, newContact]);
};

addOneContact();
