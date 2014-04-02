// Write all the Javacript here
$( document ).ready(function() {
    // Your code here.
	$( "a" ).click(function( event ) {
	    someFunction();
	    console.log("you've been clicked");
	    event.preventDefault();
	});	
	$(".alert").hide();
	
});

function someFunction() {
//    alert( "The link will no longer take you to jquery.com" );
    console.log("somefuntion");
}

//This form will request a certain landfill by name
jQuery("form").submit(function(e){	
  	// the name form field value
  	var entry = jQuery("#formEntry").val();
  	$(".alert").show().fadeOut(3000);
//  	$(".alert").alert("close");	  	
  	console.log("Form submitted with value :" + entry);

  	// This is taking the information and posting it to the OpenTrashLab Api.  This fails because the url is mean to GET data....
/*
  	$.ajax({
	  	type: "POST",
	  	url: "http://www.opentrashlab.com/landfills/data",
	  	dataType: "json",
	  	data: {
		  	landfill : landfill
	  	},
       	success : function(response){
    		// success - for now just log it
    		console.log("Success : " + response);

    	},
    	error : function(err){
    		// do error checking
    		alert("something went wrong");
    		console.error(err);
    	}
	  	
  	})
*/
/*
	$.ajax({
		type: "GET",
		url: "http://www.opentrashlab.com/landfills/data",
		dataType: "json",
		success: function(data) {processData(data)},
       	error : function(err){
			// do error checking
			alert("something went wrong");
			console.error(err);
       	}
	});
*/  

    e.preventDefault();
});
