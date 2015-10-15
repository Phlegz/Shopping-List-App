$(document).ready(function(){

	$("#button").click(function(){
		var item=$('#input').val();
		//$('<li>').text(item).appendTo('.items');
		var $listItem = $('<li><div class="unchecked"></div>' + "<span>"+$('#input').val()+ "</span>" + '<div class="delete"></div></li>');
		$listItem.click(function(){
			//$(this).toggleClass("checked-box")
	        // $(".unchecked").toggleClass("checked");
	        $(this).find('div:first-child').toggleClass("checked");
		});

		$('.items').append($listItem);
		$('#input').val("");
	});

	// $("ul:first").click(function(){
	// 	//$(this).toggleClass("checked-box")
 //        $(".unchecked").toggleClass("checked");
	// });
});