$(document).ready(function(){

	setInterval(function(){
		var randomNumber = 1 + Math.floor(Math.random() * 120)
		$('.num-gen').text(number)
	}

var wins = 0;
var losses = 0;
var totalScore = 0;


var gem1 = Math.rnadom()* 12 + 1;
var gem2 = Math.rnadom()* 12 + 1;
var gem3 = Math.rnadom()* 12 + 1;
var gem4 = Math.rnadom()* 12 + 1;

randomNumber.append(number);

$('.gemOne').on('click', function(){
	totalScore +=gem1;
	wins();
}
$('.gemTwo').on('click', function(){
	totalScore +=gem1;
	wins();
}
$('.gemThree').on('click', function(){
	totalScore +=gem1;
	wins();
}
$('.gemFour').on('click', function(){
	totalScore +=gem1;
	wins();
});

var winScore = function(){
	if(randomNumber === totalScore)
	winScore = wins + 1;
	alert('Winner!');
	resetGame();
} else if (randomNumber > totalScore){
	lossScore = losses + 1;
}
function resetGame(){
	window.location.reload()
};
