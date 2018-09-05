const inquirer = require('inquirer');

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
          "Exit"
        ]
      }
    ];
    this.contacts = [];   	
   }

   main(){
   	console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
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
     console.log('addContact called');
     this.main();
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
 }