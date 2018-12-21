
$(document).ready(function() {
    $('body').imagesLoaded(function() {
    
    $('.cols .cl .boxes .box .txt.kropki').each(function()  {
	var wysokosc_b = $(this).find('a.title').innerHeight();
	var tekst_b = $(this).find('.lead').html();


	
	if (wysokosc_b <= 26 && tekst_b.length >= 390) {
	    $(this).find('.lead').html(tekst_b.substring(0, 390) + "...");
	}
	if (wysokosc_b >= 52 && tekst_b.length >= 330) {
	    $(this).find('.lead').html(tekst_b.substring(0, 330) + "...");
	}
	if ( wysokosc_b >= 77 && tekst_b.length >= 280) {
	    $(this).find('.lead').html(tekst_b.substring(0, 280) + "...");
	}
	if (wysokosc_b >= 103 && tekst_b.length >= 230) {
	    $(this).find('.lead').html(tekst_b.substring(0, 230) + "...");
	}
	if ( wysokosc_b >= 129 && tekst_b.length >= 190) {
	    $(this).find('.lead').html(tekst_b.substring(0, 190) + "...");
	}
	if ( wysokosc_b >= 155 && tekst_b.length >= 100) {
	    $(this).find('.lead').html(tekst_b.substring(0, 100) + "...");
	}
	if ( wysokosc_b >= 180 && tekst_b.length >= 50) {
	    $(this).find('.lead').html(tekst_b.substring(0, 50) + "...");
	}
	if ( wysokosc_b >= 206) {
	    $(this).find('.lead').html(tekst_b.substring(0, 0));
	}
	if ( wysokosc_b >= 232 && tekst_b.length >= 390) {
	    $(this).find('.red').css("display", "none");
	}
    });
    
    $('.boxes.top .box .txt.kropki').each(function() {
	 
	var wysokosc = $(this).find('a.title').innerHeight();
	var tekst = $(this).find('.lead').html();
		
	if (wysokosc <= 26 && tekst.length >=200) {
	    $(this).find('.lead').html(tekst.substring(0, 200) + "...");
	}
	if (wysokosc >= 50 && tekst.length >=160) {
	    $(this).find('.lead').html(tekst.substring(0, 160) + "...");
	}
	if (wysokosc >= 74 && tekst.length >=120) {
	    $(this).find('.lead').html(tekst.substring(0, 120) + "...");
	}
	if (wysokosc >= 98 && tekst.length >=80) {
	    $(this).find('.lead').html(tekst.substring(0, 80) + "...");
	}
	if (wysokosc >= 122) {
	    $(this).find('.lead').css("display", "none");
	}
	if (wysokosc >= 170) {
	    $(this).find('.red').css("display", "none");
	    $(this).find('.lead').css("display", "none");
	}
    });
    	          
    $('.article .boxes.tripple .box .txt.kropki').each(function()  {
	var wysokosc_c = $(this).find('a.title').innerHeight();
	var tekst_c = $(this).find('.lead').html();
		
	if (wysokosc_c <= 26 && tekst_c.length >=250) {
	    $(this).find('.lead').html(tekst_c.substring(0, 250) + "...");
	}
	if (wysokosc_c > 50 && tekst_c.length >=180) {
	    $(this).find('.lead').html(tekst_c.substring(0, 180) + "...");
	}
	if (wysokosc_c > 76 && tekst_c.length >=120) {
	    $(this).find('.lead').html(tekst_c.substring(0, 120) + "...");
	}
	if (wysokosc_c > 102 && tekst_c.length >=80) {
	    $(this).find('.lead').html(tekst_c.substring(0, 80) + "...");
	}
	if (wysokosc_c > 128 && tekst_c.length >=50) {
	    $(this).find('.lead').html(tekst_c.substring(0, 50) + "...");
	}
	if (wysokosc_c > 154) {
	    $(this).find('.lead').css("display", "none");
	}
	if (wysokosc_c > 180) {
	    $(this).find('.lead').css("display", "none");
	    $(this).find('.red').css("display", "none");
	}
    });

    /* Ucinanie leads dla strony Intro */
    $('.cols .cr .bx.art .txt.txtmain').each(function()  {
    var wysokosc_i = $(this).find('a').innerHeight();
    var tekst_i = $(this).find('span').html();

    if (wysokosc_i <= 26 && tekst_i.length >=200) {
        $(this).find('span').html(tekst_i.substring(0, 200) + "...");
    }
    if (wysokosc_i >= 50 && tekst_i.length >=160) {
        $(this).find('span').html(tekst_i.substring(0, 160) + "...");
    }
    if (wysokosc_i >= 74 && tekst_i.length >=120) {
        $(this).find('span').html(tekst_i.substring(0, 120) + "...");
    }
    if (wysokosc_i >= 98 && tekst_i.length >=80) {
        $(this).find('span').html(tekst_i.substring(0, 80) + "...");
    }
    if (wysokosc_i >= 122) {
        $(this).find('span').css("display", "none");
    }
    });
});
});
