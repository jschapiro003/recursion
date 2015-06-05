// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (obj == null){
		alert("object is null: " + obj);
		
		return 'null'
	}
	else if (Array.isArray(obj)){
		alert("we have an array!")

	} else if (typeof obj == "object"){
		
		alert("We have an object: " + obj)
	}else {
		alert("object: " + obj +typeof obj)
	  //perform this logic on each member of obj or array
		if (obj == null){

			return 'null'

		} else if (obj === undefined){

			return 'undefined'

		} else if (typeof obj === "string"){
			
			return "\"" + obj.toString() + "\"";

		}else {

			var str =  obj.toString();
			return str;

		}
		
	}
	
  // your code goes here
  //primitive

  //array

  //object

};
