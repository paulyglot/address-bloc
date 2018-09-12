const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

	beforeEach((done) => {
       this.book = new ContactController();

// #1
       sequelize.sync({force: true}).then((res) => {
         done();
       })
       .catch((err) => {
         done();
       });
    });

  it("should be defined", () => {
    expect(ContactController).toBeDefined();
  });

  describe("#addContact()", () => {

     it("should add a single contact into the book", (done) => {
       this.book.addContact("Paul", "408-368-3605", "pabrower@icloud.com")
        .then((contact) => {
        	expect(contact.name).toBe("Paul");
          expect(contact.phone).toBe("408-368-3605");
          expect(contact.email).toBe("pabrower@icloud.com");
          done();
        })
        .catch((err) => {
          done();
        });
     });

   });
});