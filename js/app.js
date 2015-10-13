$(document).ready(function(){

	$("#button").click(function(){
		var item=$('#input').val();
		//$('<li>').text(item).appendTo('.items');
		$('.items').append('<li><div class="unchecked"></div>' + "<span>"+$('#input').val()+ "</span>" + '<div class="delete"></div></li>');
		$('#input').val("");

		
	});


	$(".unchecked").click(function(){

	});


	$("ul:first").click(function(){
		//$(this).toggleClass("checked-box")
        $(".unchecked").toggleClass("checked");
	});
});