System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contact, ContactDeduplication;
    return {
        setters:[],
        execute: function() {
            Contact = (function () {
                function Contact(emails) {
                    this.emails = emails;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
            ContactDeduplication = (function () {
                function ContactDeduplication() {
                }
                ContactDeduplication.exec = function (contacts) {
                    var _this = this;
                    var emails = {};
                    contacts.forEach(function (contact) {
                        contact.emails.forEach(function (email) {
                            if (emails[email]) {
                                emails[email] = _this.union(emails[email], contact.emails);
                            }
                            else {
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
                };
                ContactDeduplication.union = function (a, b) {
                    return this.unique(a.concat(b));
                };
                ContactDeduplication.unique = function (a) {
                    return a.filter(function (elem, index) { return a.indexOf(elem) === index; });
                };
                return ContactDeduplication;
            }());
            exports_1("ContactDeduplication", ContactDeduplication);
        }
    }
});
//# sourceMappingURL=ContactDeduplication.js.map