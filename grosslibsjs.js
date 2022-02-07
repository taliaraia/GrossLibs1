var userInputs = { ac1:"", ac2:"", ac3:"", ac4:"", ac5:"", ac6:""}; //This stores user values.

const alreadyCompleted = { ac1:"wheat", ac2:"wheat", ac3:"swing", ac4:"floating", ac5:"sparkly", ac6:"Saturnian" }; //The values for auto-fill.

const theStory = "<h1>Hannah Goes to Space</h1><p>Golden sheaves of <span id=\"output1\"></span>,<br>Golden sheaves of <span id=\"output2\"></span>, <br> Wherever I go whatever I do,<br>Along with me they always <span id=\"output3\"></span> in the breeze.<br> <span id=\"output4\"></span>, Hannah sang her ditty as she twirled her tendrils.<br>Sealed in her <span id=\"output5\"></span> suit, helmet secure, <br> the hatch opened as she began her descent through the <span id=\"output6\"></span> atmosphere.</p>";

function submitInputs() { //The user has hit Submit. Collects data from the form.
  userInputs.ac1 = document.getElementById('input1').value;
  userInputs.ac2 = document.getElementById('input2').value;
  userInputs.ac3 = document.getElementById('input3').value;
  userInputs.ac4 = document.getElementById('input4').value;
  userInputs.ac5 = document.getElementById('input5').value;
  userInputs.ac6 = document.getElementById('input6').value;
  
  createMadLibs(); //Calls the function to write the story.
}

function autoFill() { //The user has hit Auto-Fill. Checks if user submit anything, otherwise uses alreadyCompleted values.
	if (document.getElementById('input1').value == "") {
		userInputs.ac1 = alreadyCompleted.ac1;
		document.getElementById('input1').value = userInputs.ac1;
	}
	if (document.getElementById('input2').value == "") {
		userInputs.ac2 = alreadyCompleted.ac2;
		document.getElementById('input2').value = userInputs.ac2;
	}
	if (document.getElementById('input3').value == "") {
		userInputs.ac3 = alreadyCompleted.ac3;
		document.getElementById('input3').value = userInputs.ac3;
	}
	if (document.getElementById('input4').value == "") {
		userInputs.ac4 = alreadyCompleted.ac4;
		document.getElementById('input4').value = userInputs.ac4;
	}
	if (document.getElementById('input5').value == "") {
		userInputs.ac5 = alreadyCompleted.ac5;
		document.getElementById('input5').value = userInputs.ac5;
	}
	if (document.getElementById('input6').value == "") {
		userInputs.ac6 = alreadyCompleted.ac6;
		document.getElementById('input6').value = userInputs.ac6;
	}
  
  submitInputs(); //Collects any data from the form.
}

function clearForm() { //Clears the user values and the form.
  var userInputs = { ac1:"", ac2:"", ac3:"", ac4:"", ac5:"", ac6:""};
  document.getElementById("theStory").innerHTML = "";
  document.getElementById('input1').value = "";
  document.getElementById('input2').value = "";
  document.getElementById('input3').value = "";
  document.getElementById('input4').value = "";
  document.getElementById('input5').value = "";
  document.getElementById('input6').value = "";
}

function createMadLibs() { //Creates the story.
  document.getElementById("theStory").innerHTML = theStory;
  document.getElementById("output1").innerHTML = userInputs.ac1;
  document.getElementById("output2").innerHTML = userInputs.ac2;
  document.getElementById("output3").innerHTML = userInputs.ac3;
  document.getElementById("output4").innerHTML = userInputs.ac4;
  document.getElementById("output5").innerHTML = userInputs.ac5;
  document.getElementById("output6").innerHTML = userInputs.ac6;
}
