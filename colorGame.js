var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var mode = true;
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    for(var i=3;i<6;i++)
      squares[i].style.display ="none";
    
    colors = options(3);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    looping();
	h1.style.backgroundColor = "#steelblue";
	mode = false;

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
     for(var i=3;i<6;i++)
      squares[i].style.display ="block";
    colors = options(6);
    pickedColor = colorPicker();
    colorDisplay.textContent = pickedColor;
    looping();
	h1.style.backgroundColor = "steelblue";
	mode = true;

    
});
var colors = options(6);
var pickedColor = colorPicker();

function options(num)
{
	var arr = [];
	for(var i = 0; i<num; i++)
	{
		arr.push(generatingColor());
	}
	return arr;
}

function generatingColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var colorIs = "rgb("+ r +", "+ g + ", " + b +")";
	return colorIs;
}

function colorPicker()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//Changing the h1 to ask the question.
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//Selecting all the squares and Manipulating their colors.
var squares = document.querySelectorAll(".square");
var answer = document.getElementById("answer");
var h1 = document.querySelector("h1");
looping();

function looping()
{
for(var i=0; i<squares.length; i++){
	//adding colors to squares.
	squares[i].style.backgroundColor = colors[i];
    //adding event listeners. This will check if the clicked color itself is the answer.
    squares[i].addEventListener("click", function(){
    	var clickedColor = this.style.backgroundColor;
    	if(clickedColor === pickedColor)
    		{
    			answer.textContent = "Correct!";
    			changeColor(clickedColor);
    			h1.style.backgroundColor = clickedColor;
    			resetButton.textContent = "Play Again!";

    		}
    	else
    	{
    		this.style.backgroundColor = "#232323";
    		answer.textContent = "Try Again!";
    	}
    });
}
}
function changeColor(color){
	for(var i =0;i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//reset button logic
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	if(mode === true)
		colors = options(6);
	else colors = options(3);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	looping();
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	answer.textContent = "";


});