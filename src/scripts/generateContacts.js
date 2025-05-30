import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = Array(number).fill(0).map(createFakeContact);

    const prevContacts = await readContacts();

    await writeContacts([...prevContacts, ...contacts]);
  } catch (err) {
    console.error('Помилка в generateContacts:', err);
    throw err;
  }
};

generateContacts(5);
