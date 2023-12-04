//your code here
let input = document.getElementById("evaluatedText");
let h3 = document.querySelector("h3");
input.addEventListener("input", onChange);
function onChange(){
	let str = input.value;
	let wordCounts = countWords(str);
	h3.innerText = wordCounts;
}

function countWords(str) {
	str = str.trim();
	if(str == ""){
		return 0;
	}
	let word = str.split(/\s+/);
	return word.length;
}