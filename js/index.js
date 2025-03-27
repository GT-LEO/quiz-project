let compete = document.querySelector(".compete");
	/*window.addEventListener("scroll", handleScroll);
	function handleScroll(){
	if(window.scrollY > 100){
		compete.classList.add("background")
	}
	else{
		compete.classList.remove("background")
			}
	}*/
let mark = 0;
let count = 0;
	let one = document.querySelector(".one");
	let two = document.querySelector(".two");
	let three = document.querySelector(".three");
	let four = document.querySelector(".four");
	let five = document.querySelector(".five");
	let six = document.querySelector(".six");
	let seven = document.querySelector(".seven");
	let eight = document.querySelector(".eight");
	let nine = document.querySelector(".nine");
	let ten = document.querySelector(".ten");
	let answers = document.querySelector(".answers");
	let scoreContainer = document.querySelector(".score-container");
	let ok = document.querySelector(".ok");
	let submit = document.querySelector(".submit");

	let start = document.querySelector(".start");
	
	let score = document.querySelector(".score");
	let next = document.querySelector(".next");

	let mark1 = 0;
	let mark2 = 0;
	let mark3 = 0;
	let mark4 = 0;
	let mark5 = 0;
	let mark6 = 0;
	let mark7 = 0;
	let mark8 = 0;
	let mark9 = 0;
	let mark10 = 0;

	let wrong1 = document.querySelector(".wrong1");
	let wrong2 = document.querySelector(".wrong2");
	let wrong3 = document.querySelector(".wrong3");
	let wrong4 = document.querySelector(".wrong4");
	let wrong5 = document.querySelector(".wrong5");
	let wrong6 = document.querySelector(".wrong6");
	let wrong7 = document.querySelector(".wrong7");
	let wrong8 = document.querySelector(".wrong8");
	let wrong9 = document.querySelector(".wrong9");
	let wrong10 = document.querySelector(".wrong10");

	let correct1 = document.querySelector(".correct1");
	let correct2 = document.querySelector(".correct2");
	let correct3 = document.querySelector(".correct3");
	let correct4 = document.querySelector(".correct4");
	let correct5 = document.querySelector(".correct5");
	let correct6 = document.querySelector(".correct6");
	let correct7 = document.querySelector(".correct7");
	let correct8 = document.querySelector(".correct8");
	let correct9 = document.querySelector(".correct9");
	let correct10 = document.querySelector(".correct10");

start.addEventListener("click", handleStart);
submit.addEventListener("click", handleSubmit);
next.addEventListener("click", handleNext);
function handleStart(e){
one.style.display = "block";
next.style.display = "block";
this.style.display = "none"
}

function handleNext(e){
count+= 1;
console.log(count)
if(count === 1){
two.style.display = "block";
one.style.display = "none";
}
else if(count === 2){
three.style.display = "block";
two.style.display = "none";
one.style.display = "none";
}
else if(count === 3){
four.style.display = "block";
three.style.display = "none";
two.style.display = "none";
one.style.display = "none";
}
else if(count === 4){
five.style.display = "block";
four.style.display = "none";
}
else if(count === 5){
six.style.display = "block";
five.style.display = "none";
}
else if(count === 6){
seven.style.display = "block";
six.style.display = "none";
}
else if(count === 7){
eight.style.display = "block";
seven.style.display = "none";
}
else if(count === 8){
nine.style.display = "block";
eight.style.display = "none";
}
else if(count === 9){
ten.style.display = "block";
nine.style.display = "none";
this.style.display = "none";
submit.style.display ="block";
}

}


function handleSubmit(e){
/*if(wrong1.checked){
	alert("error! Two options picked at a time")
}*/
ok.style.display = "block";

if(correct1.checked && !wrong1.checked){
	mark1 = 10;
	console.log(mark1)
}
else{
	mark1 = 0;
	console.log(mark1)

}
if(correct2.checked && !wrong2.checked){
	mark2 = 10;
	console.log(mark2)
}
else{
	mark2 = 0;
	console.log(mark2)

}
if(correct3.checked && !wrong3.checked){
	mark3 = 10;
	console.log(mark3)
}
else{
	mark3 = 0;
	console.log(mark3)
}
if(correct4.checked && !wrong4.checked){
	mark4 = 10;
	console.log(mark4)
}
else{
	mark4 = 0;
	console.log(mark4)
}
if(correct5.checked && !wrong5.checked){
	mark5 = 10;
	console.log(mark5)
}
else{
	mark5 = 0;
	console.log(mark5)
}
if(correct6.checked && !wrong6.checked){
	mark6 = 10;
	console.log(mark6)
}
else{
	mark6 = 0;
	console.log(mark6)
}
if(correct7.checked && !wrong7.checked){
	mark7 = 10;
	console.log(mark7)
}
else{
	mark7 = 0;
	console.log(mark7)
}
if(correct8.checked && !wrong8.checked){
	mark8 = 10;
	console.log(mark8)
}
else{
	mark8 = 0;
	console.log(mark8)
}
if(correct9.checked && !wrong9.checked){
	mark9 = 10;
	console.log(mark9)
}
else{
	mark9 = 0;
	console.log(mark9)
}
if(correct10.checked && !wrong10.checked){
	mark10 = 10;
	console.log(mark10)
}
else{
	mark10 = 0;
	console.log(mark10)
}

let finalScore = mark1 + mark2 + mark3 + mark4 + mark5 + mark6 + mark7 + mark8 + mark9 + mark10;
score.innerText = finalScore;
// alert(finalScore);
 this.style.display = "none";
scoreContainer.style.display = "block";
answers.style.display = "block";
if(finalScore <= 39){
	score.style.color = "red";
}
else if(finalScore >= 40 && finalScore <= 49){
	score.style.color = "orange";
}
else if(finalScore >= 50 && finalScore <= 69){
	score.style.color = "yellow";
}
else if(finalScore >= 70){
	score.style.color = "green";
}

}


