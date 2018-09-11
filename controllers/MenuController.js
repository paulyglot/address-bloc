const inquirer = require('inquirer');
const ContactController = require("./ContactController");

 module.exports = class MenuController {
   constructor(){
   	this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Get Date and Time",
          "Add new contact",
          "Exit",
          "Add new email"
        ]
      }
    ];
    this.book = new ContactController();   	
   }

   main(){
   	console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Add new email":
           this.addContact();
           break;
         case "Get Date and Time":
           this.getDate();
           break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
   }

   clear(){
   	console.log("\x1Bc");
   }

   getDate(){
   	this.clear();
   	let date = require('date-and-time');
   	let now = new Date();
   	console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss'));
   	this.main();
   }

   addContact(){
     this.clear();
     inquirer.prompt(this.book.addContactQuestions).then((answers) => {
       this.book.addContact(answers.name, answers.phone).then((contact) => {
         console.log("Contact added successfully!");
         this.main();
       }).catch((err) => {
         console.log(err);
         this.main();
       });
     });
   }

   addEmail(){
     this.clear();
     inquirer.prompt(this.book.addContactQuestions).then((answers) => {
       this.book.addContact(answers.name, answers.phone).then((contact) => {
         console.log("Contact added successfully!");
         this.main();
       }).catch((err) => {
         console.log(err);
         this.main();
       });
     });
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }

   getContactCount(){
     return this.contacts.length;
   }

   remindMe(){
    this.clear();
    return 'Learning is a life-long pursuit';
    this.main();
   }
 }