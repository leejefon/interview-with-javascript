System.register(['./ContactDeduplication'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ContactDeduplication_1;
    return {
        setters:[
            function (ContactDeduplication_1_1) {
                ContactDeduplication_1 = ContactDeduplication_1_1;
            }],
        execute: function() {
            describe("Contact deduplication", function () {
                it("should work", function () {
                    var contacts = [];
                    contacts.push(new ContactDeduplication_1.Contact(['a@fb.com', 'b@fb.com']));
                    contacts.push(new ContactDeduplication_1.Contact(['a@fb.com']));
                    contacts.push(new ContactDeduplication_1.Contact(['b@fb.com', 'c@fb.com']));
                    contacts.push(new ContactDeduplication_1.Contact(['d@fb.com']));
                    var resultContacts = [];
                    resultContacts.push(new ContactDeduplication_1.Contact(['a@fb.com', 'b@fb.com', 'c@fb.com']));
                    resultContacts.push(new ContactDeduplication_1.Contact(['d@fb.com']));
                    expect(ContactDeduplication_1.ContactDeduplication.exec(contacts)).toEqual(resultContacts);
                });
            });
        }
    }
});
//# sourceMappingURL=ContactDeduplicationSpec.js.map