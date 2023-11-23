	new WOW().init();

	$("#t1").click(
			function(){
				$('.edu').toggle(300);
			}
		);
	$("#t2").click(
			function(){
				$('.exp').toggle(300);
			}
		);
	$("#t3").click(
			function(){
				$('.cer').toggle(300);
			}
		);
	$("#t4").click(
			function(){
				$('.con').toggle(300);
			}
		);
	$('.fa-angle-up').slideUp();
	var count = 0;
	$('#edu-head').click(
			function(){
				
				$('#edu-show').slideToggle();
				if (count==0)
				{
					$('.fa-angle-down').slideUp();
					$('.fa-angle-up').slideDown();
					count = 1;
				}
				else
				{
					$('.fa-angle-up').slideUp();
					$('.fa-angle-down').slideDown();
					count = 0;
				}
			}
		);

	$('#exp-head').click(
			function(){
				
				$('#exp-show').slideToggle();
				if (count==0)
				{
					$('.fa-angle-down').slideUp();
					$('.fa-angle-up').slideDown();
					count = 1;
				}
				else
				{
					$('.fa-angle-up').slideUp();
					$('.fa-angle-down').slideDown();
					count = 0;
				}
			}
		);

	$('#cer-head').click(
			function(){
				
				$('#cer-show').slideToggle();
				if (count==0)
				{
					$('.fa-angle-down').slideUp();
					$('.fa-angle-up').slideDown();
					count = 1;
				}
				else
				{
					$('.fa-angle-up').slideUp();
					$('.fa-angle-down').slideDown();
					count = 0;
				}
			}
		);
	$('#con-head').click(
			function(){
				
				$('#con-show').slideToggle();
				if (count==0)
				{
					$('.fa-angle-down').slideUp();
					$('.fa-angle-up').slideDown();
					count = 1;
				}
				else
				{
					$('.fa-angle-up').slideUp();
					$('.fa-angle-down').slideDown();
					count = 0;
				}
			}
		);