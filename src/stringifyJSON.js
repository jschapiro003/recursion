// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//VERSION 2

var stringifyJSON = function(obj){

	
	//check to see if obj = array or legit object
	if (typeof obj !== 'object' || !Array.isArray(obj)){
		if (typeof obj === 'string'){
			
				return "\"" + obj + "\""
			
		} 
		else if (obj != null && obj != undefined ){
			
				return obj.toString()
			
		}else {
			if (obj === null ){
				return 'null'
			}
			else if (obj === undefined){
				return 'undefined'
			}
		} 
	} 
	else {
		//if we have an array 
		alert(typeof obj)
		if (Array.isArray(obj)){
			if (obj.length > 0){

				return "[" + _.map(obj, stringifyJSON).toString() + "]"
			}
			else {
				return '[]'
			}
		}else if (typeof obj === 'object'){
			//map values to new object using the key value pairs
			alert("we have an object here")
		}
	}

		

}



//VERSION 1
/*var stringifyJSON = function(obj) {
	alert("Current Object: " + obj)
	
	//check to see if current position is beginning of 
	//object,array, key, or value
	//stringify it based on certian rules for each type
	var soloObject = false;
	//base case
	if (typeof obj!== 'object' && !Array.isArray(obj) || obj === null){
		
		//perform this logic on each member of obj or array
		
		if (obj == null){
			if (soloObject === true){
				return 'null'

			}else {

				return null;
			}
			

		} else if (obj === undefined){
			if (soloObject === true){

				return 'undefined'

			} else {

				return undefined
			}
			

		} else if (typeof obj === "string"){
			
			return "\"" + obj.toString() + "\"";

		}else {

			var str =  obj.toString();
			return str;

		}
		return obj;
		
		alert("Stringifying : " + JSON.stringify(obj))
		return JSON.stringify(obj)
	}
	 if (obj!= null && typeof obj === "object" && typeof Object.keys(obj).length === "number" ){
	 	alert("not base case: " + obj)
	 	if (Array.isArray(obj)){

	 		var stringifiedObject = [];

	 		if (obj.length){

		 		_.each(obj,function(element,index,list){
		 			
		 			if (typeof element === 'number' || typeof element === 'string'){
		 				alert("pushing a number")
		 				stringifiedObject.push(element)
		 			}
		 			else{
		 				alert("pushing a " + typeof element)
		 				
						stringifiedObject.push(JSON.stringify(obj));
		 			}
		 		})

		 		return JSON.stringify(stringifiedObject);

	 		} else {
	 			
	 			return JSON.stringify(obj);
	 		}
	 	}
	 	else if (typeof obj === 'object'){
	 		alert('We have an object')
	 		_.each(obj,function(value,key,list){

	 		})
	 	}
	 }
	 
	
	
  // your code goes here
  //primitive

  //array

  //object

};*/
