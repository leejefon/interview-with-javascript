import { Contact, ContactDeduplication } from './ContactDeduplication';

describe("Contact deduplication", () => {
  it("should work", () => {
    var contacts: Contact[] = [];

    contacts.push(new Contact(['a@fb.com', 'b@fb.com']));
    contacts.push(new Contact(['a@fb.com']));
    contacts.push(new Contact(['b@fb.com', 'c@fb.com']));
    contacts.push(new Contact(['d@fb.com']));

    var resultContacts: Contact[] = [];

    resultContacts.push(new Contact(['a@fb.com', 'b@fb.com', 'c@fb.com']));
    resultContacts.push(new Contact(['d@fb.com']));

    expect(ContactDeduplication.exec(contacts)).toEqual(resultContacts);
  });
});
