// var colors = ["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(255, 0, 255)",
// "rgb(255, 255, 255)"];
var numSqs = 6;
var colors = [];
var pickedColor;
var sqs = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easy");
// var hardButton = document.querySelector("#hard");
var modeButton = document.querySelectorAll(".mode");


init();
function init () {
	//button listeners
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqs = 3 : numSqs = 6;
			reset();
		})
	}

	//square listeners
	for (var i = 0; i < sqs.length; i++) {
		//sqs[i].style.backgroundColor = colors[i];
		sqs[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "play again?";
				changeAll(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Wrong";
			}

			// colorDisplay.textContent = this.style.backgroundColor;
			// colorDisplay.style.color = this.style.backgroundColor;
		})
	}
	reset();
}



function reset() {
	colors = generateRandomNums(numSqs);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < sqs.length; i++) {
		if (colors[i]) {
			sqs[i].style.display = "block";
			sqs[i].style.backgroundColor = colors[i];
		}
		else
		sqs[i].style.display = "none";
	}
	this.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
}
// easyButton.addEventListener("click", function() {
// 	hard.classList.remove("selected");
// 	easy.classList.add("selected");
// 	colors = generateRandomNums(3);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < sqs.length; i++) {
// 		if (colors[i]) {
// 			sqs[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			sqs[i].style.display = "none";
// 		}
// 	}
// })
//
// hardButton.addEventListener("click", function() {
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	colors = generateRandomNums(6);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < sqs.length; i++) {
// 		sqs[i].style.backgroundColor = colors[i];
// 		sqs[i].style.display = "block";
// 	}
// })


resetButton.addEventListener("click", function() {
	// colors = generateRandomNums(numSqs);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// 	messageDisplay.textContent = "";
	// for (var i = 0; i < sqs.length; i++) {
	// 	sqs[i].style.backgroundColor = colors[i];
	// }
	// this.textContent = "New Colors";
	// h1.style.backgroundColor = "steelblue";
	reset();
})

function changeAll(color) {
	for (var i = 0; i < sqs.length; i++) {
		sqs[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var f = Math.floor(Math.random() * colors.length);
	return colors[f];
}

function generateRandomNums(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		arr[i] = "rgb("+ r + ", " + g + ", " + b + ")";
	}
	return arr;
}
