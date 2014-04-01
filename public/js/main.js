// Write all the Javacript here
$( document ).ready(function() {
    // Your code here.
	$( "a" ).click(function( event ) {
	    someFunction();
	    console.log("you've been clicked");
	    event.preventDefault();
	});	
});

function someFunction() {
    alert( "The link will no longer take you to jquery.com" );
    console.log("somefuntion");
}
