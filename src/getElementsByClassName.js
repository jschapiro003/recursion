// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
 //write an inner function to check to s
	var elementsWithClass = [];

	function classCheck(element){

		//base case
		//check to see if current element contains the class in question  --> first element = document.body
		if (element.classList && element.classList.contains(className)){
			//if it does push the element 
			elementsWithClass.push(element)
		}
		//loop through the children of document.body and applay the above logic to each of the children
		for (var i = 0; i < element.childNodes.length; i ++){
			classCheck(element.childNodes[i])
		}

	}

	classCheck(document.body)
	return elementsWithClass;

	
};





























