// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//VERSION 2

var stringifyJSON = function(obj){
	
	// Base Case
	if (obj === null || obj == undefined || typeof obj !== 'object' && !Array.isArray(obj)){
		
		if (typeof obj === 'string'){
			
				return "\"" + obj + "\""
			
		} else if (obj != null && obj != undefined ){
			
				return obj.toString()
			
		}else {

			if (obj === null ){

				return 'null'
			}
			else if (obj === undefined){

				return 'undefined'
			}

		} 
	} else {
		//Array Found
		if (Array.isArray(obj)){

			if (obj.length > 0){
				//map each value to a new arrray with stringified values
				return "[" + _.map(obj, stringifyJSON).toString() + "]"

			}
			else {

				return '[]'
			}

		} else if (typeof obj === 'object'){
			//map values to new object using the key value pairs
			if (Object.keys(obj).length > 0){

				_.each(obj,function(value,key){ if (obj[key] === undefined || typeof obj[key] === 'function'){ delete obj[key]}})

				return "{" + _.map(obj,function(value,key,list){ return stringifyJSON(key) + ":" + stringifyJSON(value)}) + "}"

			} else {

				return '{}'
			}
		}
	}
}



