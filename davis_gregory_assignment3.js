// Gregory Davis
// Created for SDI Online
// July 24, 2014
// Assignment 3

alert("Now viewing Gregory Davis's Assignment 3 Project JS");

// login
var welcomeNote;
var welcomeEntry;
var memberIDValid;
var memberPWord;
var memberPW;
var memberPWordValid;
var memberMessage;
var memberError;

welcomeNote = 'Welcome to "My Online Profile."  Please enter your user ID # (Below 99999, above 0)';
welcomeEntry = prompt(welcomeNote, "Enter your user ID #");

welcomeEntry = parseInt(welcomeEntry);
memberPW = "Enter a password number, above 100000";
memberError = "Invalid Entry, please try again or sign up to access 'My Online Profile.'";
memberPWordValid = false;

if (welcomeEntry < 100000) {
	memberIDValid = true;
	while (memberPWordValid === false) {
		memberPWord = prompt(memberPW, "******");
		if (memberPWord >= 100000) {
			memberPWordValid = true;
			memberMessage = "Welcome user #" + welcomeEntry + ".  You are now signed in.";
		} else {
			memberPWordValid = false;
			memberMessage = "Incorrect Password, please try again.";
			console.log(memberMessage);
		};
	};
} else {
	memberIDValid = false;
	memberMessage = memberError;
};

console.log(memberMessage);
	
	
// members online
var onlineMembers;
var onlineMessage;

// Messaging





// Email





// Profiles





// Post profile(s)




// Check important Dial Management messages


