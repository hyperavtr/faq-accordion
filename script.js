//variables;
const buttons = document.querySelectorAll("button");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer")


//use the + - buttons to toggle the display of answers;
//iterate buttons inside nodelist;
buttons.forEach((button, index) => {
	const answer = answers[index].style; //take one answer per index;
	//function for button class toggling;
	function toggleClasses() {
		button.classList.toggle("show-answer-btn");
		button.classList.toggle("hide-answer-btn");
	};
	button.addEventListener("click", () => {
		//condition to display answer per click on button;
		if (button.className === "show-answer-btn") {
			answer.animation = "appear ease-in 0.3s"; //add css animation;
			answer.display = "block";
			toggleClasses(); //call function to toggle classes; 
		} else {
			answer.animation = "vanish ease-in 0.3s"; // it doesn't work;
			answer.display = "none";
			toggleClasses(); //call function to toggle classes;
		}
	});
});


//use the questions to toggle the display of answers;
//iterate questions inside nodelist;
questions.forEach((question, index) => {
	const answer = answers[index].style;  //take one answer per index;
	//function for button classes toggling;
	function toggleClasses() {
		buttons[index].classList.toggle("show-answer-btn");
		buttons[index].classList.toggle("hide-answer-btn");
	};
	question.addEventListener("click", () => {
		//condition to display answer per click on question;
		if (buttons[index].className === "show-answer-btn") {
			answer.animation = "appear ease-in 0.3s"; //add css animation;
			answer.display = "block";
			toggleClasses(); //call function to toggle classes; 
		} else {
			answer.animation = "vanish ease-in 0.3s"; // it doesn't work
			answer.display = "none";
			toggleClasses(); //call function to toggle classes; 
		}
	});
});
