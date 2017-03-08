
window.onload = function(){

	console.log("Hello all");
	var editTag = document.getElementById("edit-profile");
	var editFrom = document.getElementById("edit-form");

	console.log(editTag.innerHTML);

	editTag.innerHTML = "Edit";
	editTag.onclick =function(){
		editTag.innerHTML = "Clicked";
		editFrom.style.display = "block";
	}
}