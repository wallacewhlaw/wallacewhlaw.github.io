var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var weightInput = document.getElementById('weightInput');
var weightOutput = document.getElementById('weightOutput');
var mathInput = document.getElementById('mathInput');
var mathOutput = document.getElementById('mathOutput');
var inputTypeValue, resultTypeValue, weightInputValue, weightOutputValue, mathInputValue, mathOutputValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
weightType.addEventListener("change", myResult);
weightType.addEventListener("change", myResult);
mathType.addEventListener("change", myResult);
mathType.addEventListener("change", myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    weightInputValue = weightInput.value;
    weightOutputValue = weightOutput.value;
    mathInputValue = mathInput.value;
    mathOutputValue = mathOutput.value;

	if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){

		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) * 100;

	}else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
		//this is meter to meter formula 
		result.value = input.value
	}



	if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(inputTypeValue === "Centimeter" && resultTypeValue==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
    }
    



//weight
	if(weightInputValue === "pounds" && weightOutputValue==="grams"){

		//this is meter to kilometer formula 
		result.value = Number(input.value) * 453.59237;
	}else if(weightInputValue === "pounds" && weightOutputValue==="kg"){

		//this is meter to Centimeter formula 
		result.value = Number(input.value) / 2.2046;

	}else if(weightInputValue === "pounds" && weightOutputValue==="pounds"){
		//this is meter to meter formula 
		result.value = input.value
	}



	if(weightInputValue === "grams" && weightOutputValue==="pounds"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) / 453.59237;
	}else if(weightInputValue === "grams" && weightOutputValue==="kg"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) / 1000;
	}else if(weightInputValue === "grams" && weightOutputValue==="grams"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(weightInputValue === "kg" && weightOutputValue==="pounds"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 2.2046;
	}else if(weightInputValue === "kg" && weightOutputValue==="grams"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(weightInputValue === "kg" && weightOutputValue==="kg"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
    }
    



    //math
	if(mathInputValue === "decimal" && mathOutputValue==="percent"){

		//this is meter to kilometer formula 
		result.value = Number(input.value) * 100 ;
	}else if(mathInputValue === "decimal" && weightOutputValue==="decimal"){
		//this is meter to meter formula 
		result.value = input.value
	}



	if(mathInputValue === "percent" && weightOutputValue==="decimal"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) / 100;
	}else if(mathInputValue === "percent" && weightOutputValue==="percent"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}
}
