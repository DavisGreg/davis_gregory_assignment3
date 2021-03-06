// Gregory Davis
// Created for SDI Online
// July 24, 2014
// Assignment 3

alert("Now viewing Gregory Davis's Assignment 3 Project JS");

// login information
var welcomeNote;
var welcomeEntry;
var memberIDValid;
var memberPWord;
var memberPW;
var memberPWordValid;
var memberMessage;
var memberError;

// Prompt user to enter login information, limited by number size
welcomeNote = 'Welcome to "My Online Profile."  Please enter your user ID # (Below 99999, above 0)';
welcomeEntry = prompt(welcomeNote, "Enter your user ID #");

welcomeEntry = parseInt(welcomeEntry);
memberPW = "Enter a password number, above 100000";
memberError = "Invalid Entry, please try again or sign up to access 'My Online Profile.'";
memberPWordValid = false;

var onlineMembers;
var onlineMessage;

onlineMembers = 10;

// If successful login ID, allow user to enter password, limited to a 6 digit number or larger.
// If password is incorrect, allow user to retry password entry.
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
	onlineMembers = onlineMembers + 1;
	onlineMessage = "There are " + onlineMembers + " users online right now.";
	console.log(onlineMessage);
} else {
	memberIDValid = false;
	memberMessage = memberError;
};

console.log(memberMessage);
	

// Messaging

var createProfiles;
var messagingProfiles;
var postAsk;
var postHere;
var postAnother;

if (welcomeEntry > 100000) {
	console.log("Thank you for visiting 'My Online Profile'!");
} else {

// Add profiles to the account (email, social networking, banking, etc.)
createProfiles = confirm("Would you like to add profiles to your account?");
	if (createProfiles === true) {
		var messaging = function(profile) {
			var addProfiles = prompt("How many profiles would you like to add?", "Enter a whole number lower than 10.");
			addProfiles = parseInt(addProfiles);
			var profileNumber = 0;	
			console.log(addProfiles + " profiles created.");
	
			for (var messages = [addProfiles]; [addProfiles] > profileNumber; profileNumber++) {
				var postMessageAnother = 0;
				var postAsk = "Would you like to post a message in ";
				var postHere = "Post message here.";
				var profileName = [profileNumber];
				profileName = parseInt(profileName);
				var usersName = [profileNumber];
				usersName = parseInt(usersName);
				var createdProfile = prompt("Enter profile name.", "Profile name");
				var profileUser = prompt("Enter User Name.", "User name");
				var postAMessage = prompt(postAsk + createdProfile + "?", postHere);
				console.log("Profile Name: " + createdProfile + ". User Name: " + profileUser + ". Message: " + postAMessage);
// Allow user to post further within each profile
				postAnother = confirm("Would you like to post another message in " + createdProfile + "?");
				if (postAnother === true) {
					var postCount = 1;
					while (postAnother === true) {
						var postMessageAnother = prompt("Post another message:", postHere);
						postCount = postCount + 1;
						console.log(createdProfile + " message " + postCount + ": " + postMessageAnother);
						postAnother = confirm("Would you like to post another message in " + createdProfile + "?");
					};
				};

			var totalProfiles = ["Profile #" + (profileNumber + 1) + ": ", createdProfile, profileUser, postAMessage, postMessageAnother];
			console.log(totalProfiles);
			};

		};
	} else {
		console.log("User " + welcomeEntry + " decided not to add profiles at this time.");
	};
};

messaging(messagingProfiles);

