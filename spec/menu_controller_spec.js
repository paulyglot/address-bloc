const MenuController = require("../controllers/MenuController");

// #1
 describe("MenuController", () => {

 	beforeEach(() => {
      this.menu = new MenuController();
    });
     it("should return 'Learning is a life-long pursuit' when remindMe is called", () => {
      expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit');
    });
 });

