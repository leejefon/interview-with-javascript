class Contact {
  constructor (emails) {
    this.emails = emails;
  }
}

class ContactDeduplication {
  static exec(contacts) {
    const emails = {};
    contacts.forEach(contact => {
      contact.emails.forEach(email => {
        if (emails[email]) {
          emails[email] = this.union(emails[email], contact.emails);
        } else {
          emails[email] = contact.emails;
        }
      });
    });

    const mergedEmails = [];
    for (const email in emails) {
      let added = false;
      for (const i in mergedEmails) {
        if (mergedEmails[i].indexOf(email) !== -1) {
          mergedEmails[i] = this.union(mergedEmails[i], emails[email]);
          added = true;
        }
      }
      if (!added) {
        mergedEmails.push(emails[email]);
      }
    }

    const mergedContacts = [];
    for (const i in mergedEmails) {
      mergedContacts.push(new Contact(mergedEmails[i]));
    }

    return mergedContacts;
  }

  static union(a, b) {
    return this.unique(a.concat(b));
  }

  static unique(a) {
    return a.filter((elem, index) => a.indexOf(elem) === index);
  }
}

module.exports = {
  Contact,
  ContactDeduplication
};
