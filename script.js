let resumeBtn = document.getElementById("resumeBtn");
let bar = document.getElementById("bar")
// let skills = document.getElementById("skills")

resumeBtn.addEventListener("click", function(){
	// alert("Open Successfully")
	window.open('resume.html')
});

let ul = document.querySelector("ul")
bar.addEventListener("click", function(){
	ul.classList.toggle('showData')
	if(ul.className == "showData"){
		bar.className ="bx bx-x"
	}else{
		bar.className = "bx bx-menu"
	}
});

