
const url="https://v2.jokeapi.dev/joke/Pun?type=single";


var checkedValue = $('.checkbox:checked').val();

$("button").click(()=>{
	checkedValue = $('.checkbox:checked').val();
	const url="https://v2.jokeapi.dev/joke/Pun?type="+checkedValue;
	$.getJSON(url,(data)=> {
		console.log(checkedValue+"<-checkbox value");

		
		if(checkedValue == "single"){
			$(".text-here").html("<h3>"+data.joke+"</h3>");
			console.log("single<-condition value");
		}
			
		if(checkedValue == "twopart"){
			$(".text-here").html("<h3><p>"+data.setup +"<br>>"+data.delivery+"</p></h3>");
			console.log("two part<-condition value");
			// $(".for-twopart .setup").html("<h3>"+data.setup+"</h3>");
			// $(".for-twopart .delivery").html("<h3>"+data.delivery+"</h3>");
		}
		console.log("-----------------------------------------------");
	}
);
});


