$(function(){
  
	$(".dropdown-menu.origem a").click(function(){

		var selected = $(this).text();
		alert(selected);
		$(".btn.origem:first-child").text(selected);
		$(".btn.origem:first-child").val(selected);

		if(selected == "Outra")
		{
			$('.btn.destino:first-child').addClass('disabled');
			$('.btn.passageiros:first-child').addClass('disabled');			
		}
		else if(selected == "Beja")
		{
			$('.btn.destino:first-child').removeClass('disabled');
			$('.btn.passageiros:first-child').removeClass('disabled');			
		}
		else {
			$(".btn.destino:first-child").val("Beja");
			$(".btn.destino:first-child").text("Beja");
			$('.btn.destino:first-child').addClass('disabled');
			$('.btn.passageiros:first-child').removeClass('disabled');			
		}

	});



	$(".dropdown-menu.destino a").click(function(){

		var selected = $(this).text();
		alert(selected);
		$(".btn.destino:first-child").text(selected);
		$(".btn.destino:first-child").val(selected);

		if(selected == "Outra")
		{
			$('.btn.destino:first-child').addClass('disabled');
			$('.btn.passageiros:first-child').addClass('disabled');			
		}
		else if(selected == "Beja")
		{
			$('.btn.destino:first-child').removeClass('disabled');
			$('.btn.passageiros:first-child').removeClass('disabled');			
		}
		else {
			$('.btn.destino:first-child').removeClass('disabled');
			$('.btn.passageiros:first-child').removeClass('disabled');			
		}

	});

});