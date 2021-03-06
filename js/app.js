console.log("PROJECT ONE - SCINTILLATING SEQUENCES");



const App = {
	arrColorValues: ["redButton", "yellowButton", "blueButton", "greenButton"],
	arrApp: [],
	arrPlayer: [],
	arrPlayerTwo: [],
	playerOneTurn: true,
	playerTwoTurn: false,
	gameCounterPOne: 0,  //keeps track of rounds player 1 won
	gameCounterPTwo: 0,  //keeps track of rounds player 2 won
	timeoutID: null,
	timeoutIDTwo: null,
	userName: '',
	userNameTwo: '',

	playGame(){		//game will run off of this func
		this.displayUserMetrics();
		this.arrOutput();  //output will display
		this.playerInput();  //input collected from user
	},
	displayUserMetrics(){
		const $userName = $('#userNameBox').val();
		$('#userDisplay').text(`${$userName}, Score: ${this.gameCounterPOne}`).val();
		const $userNameTwo = $('#userNameBoxTwo').val();
		$('#userTwoDisplay').text(`${$userNameTwo}, Score: ${this.gameCounterPTwo}`).val();
	},
	arrOutput(){
		const randIntZeroAndThree = Math.floor(Math.random()*4);
		this.arrApp.push(this.arrColorValues[randIntZeroAndThree]);
		console.log(this.arrApp);
		this.showStep(0);
	},
	//need a variable here that represents the nth (latest) index of 
	colorChange(colorChangeIndex) {  //have variable here that represents button

		console.log('color change called with', colorChangeIndex)
        if (colorChangeIndex === "redButton"){
        	console.log('red');
            //change background color of '#redButton'
        	$("#redButton").css("backgroundColor", "azure");
        	// //if nth index of arr.App === "yellowButton"
        } else if (colorChangeIndex === "yellowButton"){
        	console.log('yellow');
			//change background color of '#yellowButton'
        	$("#yellowButton").css("backgroundColor", "azure");
        	$("#yellowButton").css("color", "magenta");
        	//if nth index of arr.App === "blueButton"
        } else if (colorChangeIndex === "blueButton"){
        	console.log('blue');
			//change background color of '#blueButton'
			$("#blueButton").css("backgroundColor", "azure")
			//if nth index of arr.App === "greenButton"
        } else if (colorChangeIndex === "greenButton"){
        	console.log('green');
			//change background color of '#greenButton'
        	$("#greenButton").css("backgroundColor", "azure")
        }			

        setTimeout( function(){
	        App.resetColors(colorChangeIndex);
        }, 300)
		//if nth index of arr.App === "redButton"
		// short pause

	},
	resetColors(resetColorInd){  // make this turn off all colors back @ once
		console.log('reset color change called with', resetColorInd);
		if (resetColorInd === "redButton" || resetColorInd === "yellowButton" || 
			resetColorInd === "blueButton" || resetColorInd === "greenButton"){
			$("#redButton").css("backgroundColor", "rgb(255,0,0)");
			$("#yellowButton").css("backgroundColor", "rgb(200,200,0)");
			$("#yellowButton").css("color", "black");
			$("#blueButton").css("backgroundColor", "rgb(0,0,255)");
			$("#greenButton").css("backgroundColor", "rgb(0,128,0");
		}
	},
	showStep(n) {

		setTimeout( ()=> {
			
			App.colorChange(this.arrApp[n])

			if (this.arrApp[n+1]) { //if next value then..
				this.showStep(n+1)  //we apply showStep() to next value (n + 1)
			}
		}, 200)  // wait two tenths of a second then repeat


	},
	playSound() {

	},
	playerInput() {
		if (this.playerOneTurn = true) {
			$("#levelDisplay").text(`It is ${this.userName}'s turn!`)
		} else {
			null;
		}
		$('audio#chime')[0].play();
		this.timeoutID = setInterval( () => {

			// console.log(this.timeoutID);

			if (this.arrPlayer[this.arrPlayer.length-1] === this.arrApp[this.arrApp.length-1]){

				clearInterval(this.timeoutID);

				console.log("Woaaah! You aren't color-blind!");

				$("#programMessagesContainer").text("Woaaah! You aren't color-blind!");
				this.arrPlayer = [];
				this.gameCounterPOne ++;
				this.playerOneTurn = false;
				this.playerTwoTurn = true;
				this.displayUserMetrics();
				this.arrOutput();
				this.secondPlayerInput();
			} else {
				console.log('You had ONE JOB!!! YOU BLEW IT!!!');
				this.gameReset();
				this.gameOver();
			}
		}, 8000)
	},
	secondPlayerInput(){
		if (this.playerTwoTurn = true) {
			$("#levelDisplay").text(`It is ${this.userNameTwo}'s turn!`)
		} else {
			null;
		}
		$('audio#chime')[0].play();
		this.timeoutIDTwo = setInterval(() => {

			console.log(this.timeoutIDTwo);
			$("#levelDisplay").text(`It is Player Two's turn!`)

			if (this.arrApp[this.arrApp.length-1] === this.arrPlayerTwo[this.arrPlayerTwo.length-1]){

				clearInterval(this.timeoutIDTwo);

				console.log("Woaaah! You aren't color-blind!");

				$("#programMessagesContainer").text("Woaaah! You aren't color-blind!");
				this.arrPlayerTwo = [];
				this.gameCounterPTwo ++;
				this.playerOneTurn = true;
				this.playerTwoTurn = false;
				this.displayUserMetrics();
				this.arrOutput();
				this.playerInput();
			} else {
				this.gameReset();
				this.gameOver();
			}
		}, 8000)
	},
	gameReset(){
		console.log("RESET GAME!");
		clearInterval(this.timeoutID);
		clearInterval(this.timeoutIDTwo);
		this.arrApp = [];
		this.arrPlayer = [];
		this.arrPlayerTwo = [];
	},
	gameOver(){
		$('audio#buzz')[0].play();
		console.log('THE GAME IS OVER!');
		if (this.gameCounterPOne > this.gameCounterPTwo) {
			this.displayUserMetrics();
			$("#programMessagesContainer").text(`${this.userName} is VICTORIOUS! ${this.userNameTwo} BLEW IT!`);
		} else if (this.gameCounterPTwo > this.gameCounterPOne) {
			this.displayUserMetrics();
			$("#programMessagesContainer").text(`${this.userNameTwo} is VICTORIOUS! ${this.userName} BLEW IT!`);
		} else {
			if (this.gameCounterPOne === this.gameCounterPTwo) {
				this.displayUserMetrics();
				$("#programMessagesContainer").text(`This game has resulted in a TIE!`)
			}
		}
	}
};



		// number of buttons user has pressed === this.arrPlayer.length
		// so check the (this.arrPlayer.length - 1)th element of both arrays - CHECK
		// if they match
			// cancel old timeout - CHECK
			// add new color -- arrOutput() - CHECK
			// start a new timeout -- add this later, after sequence is working
				// in timeout:
				// count down
				// if count reaches 0 -- gameOver()

		// else
			// game over
			// prompt reset the game




		// setTimeout()
		// turn on correct color (use colorChange)
		// set Timeout
		// 		turn off that color -- you could make a function to turn all buttons "off" with CSS
		// 		if there is next step -- check arr Index against arr.length
		// 			showStep(arrIdx + 1) // recursion






//listeners/handlers

//add events for every key press:  when arrOutput receives new E light up btn
//add events for every key press:  when arrInput receives new keypress light up btn

$(document).on('keydown',((e) => {
	if(['ArrowUp'].includes(event.key)){
		console.log('redButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[0]);
		console.log(App.arrPlayer);
		$('#redButton').css('backgroundColor', 'azure');
	}
}));

$(document).on('keyup', ((e) => {
	if(['ArrowUp'].includes(event.key)){
		$('#redButton').css('backgroundColor', 'rgb(255,0,0)');
	}
}));

$(document).on('keydown',((e) => {
	if(['ArrowRight'].includes(event.key)){
		console.log('yellowButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[1]);
		console.log(App.arrPlayer);
		$('#yellowButton').css('backgroundColor', 'azure');
	}
}));

$(document).on('keyup', ((e) => {
	if(['ArrowRight'].includes(event.key)){
		$('#yellowButton').css('backgroundColor', 'yellow')
	}
}));

$(document).on('keydown',(e) => {
	if (['ArrowDown'].includes(event.key)){
		console.log('blueButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[2]);
		console.log(App.arrPlayer);
		$('#blueButton').css('backgroundColor', 'azure')
	}
});

$(document).on('keyup', ((e) => {
	if (['ArrowDown'].includes(event.key)){
		$('#blueButton').css('backgroundColor', 'rgb(0,0,255')
	}
}));

$(document).on('keydown', ((e) => {
	if (['ArrowLeft'].includes(event.key)){
		console.log('greenButton was pressed.');
		App.arrPlayer.push(App.arrColorValues[3]);
		console.log(App.arrPlayer);
		$('#greenButton').css('backgroundColor', 'azure')
	}
}));

$(document).on('keyup', ((e) => {
	if (['ArrowLeft'].includes(event.key)){
		$('#greenButton').css('backgroundColor', 'rgb(0,128,0)')
	}
}));

$(document).on("keydown", ((e) =>{
	if (['w'].includes(event.key)){
		console.log('redButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[0]);
		console.log(App.arrPlayerTwo);
		$('#redButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['w'].includes(event.key)){
		$("#redButton").css("backgroundColor", 'rgb(255,0,0)')
	}
});

$(document).on("keydown", ((e) =>{
	if (['d'].includes(event.key)){
		console.log('yellowButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[1]);
		console.log(App.arrPlayerTwo);
		$('#yellowButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['d'].includes(event.key)){
		$("#yellowButton").css("backgroundColor", 'yellow')
	}
});

$(document).on("keydown", ((e) =>{
	if (['s'].includes(event.key)){
		console.log('blueButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[2]);
		console.log(App.arrPlayerTwo);
		$('#blueButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['s'].includes(event.key)){
		$("#blueButton").css("backgroundColor", 'rgb(0,0,255)')
	}
});

$(document).on("keydown", ((e) =>{
	if (['a'].includes(event.key)){
		console.log('greenButton was pressed.');
		App.arrPlayerTwo.push(App.arrColorValues[3]);
		console.log(App.arrPlayerTwo);
		$('#greenButton').css('backgroundColor', 'azure')
	}
}));

$(document).on("keyup", (e) => {
	if(['a'].includes(event.key)){
		$("#greenButton").css("backgroundColor", 'rgb(0,128,0)')
	}
});

$('#nameButton').on('click', () => {
	$('audio#click')[0].play();
	const userName = $('#userNameBox').val();
	App.userName = $('#userNameBox').val();
	console.log(`${userName} is ready to play!`);
});

$('#nameButtonTwo').on('click', () => {
	$('audio#click')[0].play();
	const userNameTwo = $('#userNameBoxTwo').val();
	App.userNameTwo = $('#userNameBoxTwo').val();
	console.log(`${userNameTwo} is ready to play!`);
});

$('#startGame').on('click', () => {
	App.playGame();
	App.arrPlayer = [];
	App.arrPlayerTwo = [];
	$("#userNameContainer").hide();
	$(".playBtn").hide();
});

$(document).ready(function(){
	$("#userStories").click(function(){
		$(this).css('visibility', 'hidden');
	});
});

