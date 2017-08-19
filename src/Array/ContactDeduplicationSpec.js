import test from 'ava';
import { Contact, ContactDeduplication } from './ContactDeduplication';

test('Contact deduplication', (t) => {
  const contacts = [];

  contacts.push(new Contact(['a@fb.com', 'b@fb.com']));
  contacts.push(new Contact(['a@fb.com']));
  contacts.push(new Contact(['b@fb.com', 'c@fb.com']));
  contacts.push(new Contact(['d@fb.com']));

  const resultContacts = [];

  resultContacts.push(new Contact(['a@fb.com', 'b@fb.com', 'c@fb.com']));
  resultContacts.push(new Contact(['d@fb.com']));

  t.deepEqual(ContactDeduplication.exec(contacts), resultContacts);
});
