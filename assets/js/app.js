
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

var makeUl = function(limit){
	var ul = document.createElement('ul');
	var limit = document.getElementById('limit').value;
	console.log(limit);

	for (var i = 0; i < limit; i++) {
		var li = document.createElement('li');
		console.log(li)
		li.appendChild(document.createTextNode(i));
		li.style.textAlign = "left";
		ul.appendChild(li);
	}
	document.getElementById('makeUlDiv').appendChild(ul);
}

var doMath = function(){
	var var1 = parseInt(document.getElementById("var1").value);
	var var2 = parseInt(document.getElementById("var2").value);
	var resultEle = document.getElementById('result');
	var ops = document.getElementsByName('math');
	var op_value,result;
	for(var i = 0; i < ops.length; i++){
    	if(ops[i].checked){
        	op_value = ops[i].value;
        	if(op_value == '+'){
        		result = sum(var1,var2);
        	}
    	}
    	resultEle.innerHTML = "Result = "+result;
	}

    console.log(var1+op_value+var2+" = "+result);

    // Do rest
}

var sum = function(var1,var2){
	console.log("Sum");
	return var1 + var2;
}
// Do rest