$(window).scroll(function(){
  				if($(this).scrollTop() > 300){
    				$("#js_up").slideDown(300);
  				}else{
    				$("#js_up").slideUp(300);
  				}
			});

			$("#js_up i").on('click', function (e) { 
 				e.preventDefault();
  				$("body,html").animate({
    				scrollTop: 0
  				},700);
  				return false;
			});

function nocturno_diurno() {
  
  if (document.getElementById("body").className == "body-completo-diurno") {
    document.getElementById("body").className = "body-completo-nocturno";
    document.getElementById("header").className = "header-nocturno";
  } else {
    document.getElementById("body").className = "body-completo-diurno";
    document.getElementById("header").className = "header-diurno";

  }
}