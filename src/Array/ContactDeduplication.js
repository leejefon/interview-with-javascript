export class Contact {
  emails: string[];

  constructor (emails: string[]) {
    this.emails = emails;
  }
}

export class ContactDeduplication {
  public static exec(contacts: Contact[]): Contact[] {
    var emails = {};
    contacts.forEach(contact => {
      contact.emails.forEach(email => {
        if (emails[email]) {
          emails[email] = this.union(emails[email], contact.emails);
        } else {
          emails[email] = contact.emails;
        }
      });
    });

    var mergedEmails = [];
    for (var email in emails) {
      var added = false;
      for (var i in mergedEmails) {
        if (mergedEmails[i].indexOf(email) !== -1) {
          mergedEmails[i] = this.union(mergedEmails[i], emails[email]);
          added = true;
        }
      }
      if (!added) {
        mergedEmails.push(emails[email]);
      }
    }

    var mergedContacts = [];
    for (var i in mergedEmails) {
      mergedContacts.push(new Contact(mergedEmails[i]));
    }

    return mergedContacts;
  }

  private static union(a: string[], b: string[]): string[] {
    return this.unique(a.concat(b));
  }

  private static unique(a) {
    return a.filter((elem, index) => a.indexOf(elem) === index);
  }
}
