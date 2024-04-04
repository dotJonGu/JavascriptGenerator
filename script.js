let userInput = document.getElementById("userInput");
let pushButton = document.getElementById("pushButton");
let output = document.getElementById("output");
let hex = ["TURN INTO A WORM", "EXCHANGE BANK BALANCES", "UNCONDITIONALLY HATE FROGS", "MUMBLE FOREVER", "SINK SHIN DEEP IN SOLID FLOORS"];

pushButton.addEventListener("click", function() {
	generator(userInput.value);
	//restyle();
}
);

function generator(userInput) {
	output.innerText = "YOU FOOL! I INVOKE YOUR TRUE NAME, " + userInput + ", YOU WILL NOW " + hex[Math.floor(Math.random() * hex.length)];
}

function restyle() {
	out.put.style.color = "rgb("255", "Math.random() * 255", "Math.random() * 255")";

}